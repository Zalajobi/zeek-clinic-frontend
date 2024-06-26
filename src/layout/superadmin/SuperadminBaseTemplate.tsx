import { Fragment, ReactNode } from 'react';
import { ToasterConfig } from '@components/global/Toast';
import Header from '@layout/Header';
import Sidebar from '@layout/superadmin/Sidebar';
import { useSuperadminBaseTemplate } from '@hooks/superadmin/useSuperadminBaseTemplate';

const SuperadminBaseTemplate = ({ children }: { children: ReactNode }) => {
  const {
    // Values
    requestData,

    // Functions
    onUpdateQuerySearch,
  } = useSuperadminBaseTemplate();

  return (
    <Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-[#F7F7F7] text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar />

        <div className="w-100 flex h-screen flex-1 flex-col overflow-y-auto">
          <Header
            name={`${requestData?.first_name} ${requestData?.last_name}`}
            handleSearch={onUpdateQuerySearch}
            role={`Superadmin`}
          />

          <div
            className={`relative flex h-full flex-col space-y-4 overflow-y-auto bg-[#F1F3F7] p-12 dark:bg-ds-dark-800`}>
            {children}
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default SuperadminBaseTemplate;
