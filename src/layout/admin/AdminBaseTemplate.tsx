import { Fragment, ReactNode } from 'react';
import Sidebar from '@layout/admin/Sidebar';
import Header from '@layout/Header';
import { ToasterConfig } from '@components/global/Toast';
import { useAdminBaseTemplate } from '@hooks/admin/useAdminBaseTemplate';

const AdminBaseTemplate = ({ children }: { children: ReactNode }) => {
  const {
    // Values
    querySearch,
    requestData,

    // Functions
    onUpdateQuerySearch,
  } = useAdminBaseTemplate();

  console.log({
    requestData,
  });

  return (
    <Fragment>
      <div className="h-auto relative flex flex-1 overflow-y-auto bg-[#f1f3f7] text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar siteId={requestData?.siteId ?? ''} />

        <div className="w-100 flex h-screen flex-1 flex-col overflow-y-auto">
          <Header
            name={`${requestData?.personalInfo?.first_name ?? ''} ${
              requestData?.personalInfo?.last_name ?? ''
            }`}
            query={querySearch}
            handleSearch={onUpdateQuerySearch}
            role={requestData?.role.replace('_', ' ') as string}
            profilePic={requestData?.personalInfo?.profile_pic}
          />

          <div
            className={`w-full flex items-center justify-center max-w-screen-3xl p-10`}>
            {children}
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default AdminBaseTemplate;
