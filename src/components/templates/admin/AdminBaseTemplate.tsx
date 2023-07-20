import { Fragment, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from '../Header';
import { ToasterConfig } from '../../global/Toast';
import { useAdminBaseTemplate } from '../../../hooks/admin/useAdminBaseTemplate';

const AdminBaseTemplate = ({ children }: { children: ReactNode }) => {
  const {
    // Values
    querySearch,
    requestData,

    // Functions
    onUpdateQuerySearch,
  } = useAdminBaseTemplate();

  return (
    <Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-white text-brand-body-text bg-[#F7F7F7] dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar />

        <div className="w-100 flex h-screen flex-1 flex-col overflow-y-auto">
          <Header
            name={`${requestData?.personalInfo.first_name} ${requestData?.personalInfo.last_name}`}
            query={querySearch}
            handleSearch={onUpdateQuerySearch}
            role={requestData?.role.replace('_', ' ') as string}
          />

          <div
            className={`w-full flex items-center justify-center max-w-screen-2xl p-10`}>
            {children}
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default AdminBaseTemplate;
