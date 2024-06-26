import { Fragment, ReactNode } from 'react';
import Sidebar from '@layout/providers/Sidebar';
import Header from '@layout/Header';
import { useProviderBaseTemplate } from '@hooks/provider/useProviderBaseTemplate';
import { ToasterConfig } from '@components/global/Toast';

const ProviderBaseTemplate = ({ children }: { children: ReactNode }) => {
  const {
    // Functions
    onUpdateQuerySearch,
  } = useProviderBaseTemplate();
  return (
    <Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-white text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar />

        <div className="w-100 flex h-screen flex-1 flex-col overflow-y-auto">
          <Header
            name={`John Doe`}
            // query={querySearch}
            handleSearch={onUpdateQuerySearch}
            role={`Doctor`}
          />

          {children}
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default ProviderBaseTemplate;
