import { Fragment, useMemo } from 'react';
import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '@hooks/admin/useAdminProviderPage';
import { Typography } from '@components/global/dialog/Typography';
import AdminRoutes from '@components/admin/AdminRoutes';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import { ProviderPageSiteResponseData } from '@typeSpec/admin';
import { ApplicationTable } from '@components/global/table/ApplicationTable';
import {
  AdminProviderDataColumn,
  AdminProviderDataRow,
} from '@components/tables/row-col-mapping/AdminTable';
import ProvidersTab from '@components/admin/providers/ProvidersTab';

const AdminProvider = () => {
  const {
    // Values
    siteData,
    providerData,
    totalProviders,
    providerFrom,
    providerTo,
    resultFrom,
    resultTo,
    currentPage,
    searchProvider,
    perPage,
    noOfPages,
    selectAllProviders,
    providerStatus,

    // Functions
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onUpdateSearchProvider,
    onUpdateStatusFilterTab,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    onUpdateSelectedRow,
    onUpdateSelectAllProviders,
  } = useAdminProviderPage();

  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  const columns = useMemo(
    () => AdminProviderDataColumn(onUpdateSelectAllProviders),
    [onUpdateSelectAllProviders]
  );
  const data = useMemo(
    () =>
      AdminProviderDataRow(
        providerData,
        onUpdateSelectedRow,
        selectAllProviders
      ) ?? [],
    [providerData, onUpdateSelectedRow, selectAllProviders]
  );

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome Back, ${adminData?.personalInfo?.first_name ?? ''}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <AdminSiteInfo data={siteData as ProviderPageSiteResponseData} />

          <AdminRoutes
            siteId={siteData?.id ?? ''}
            id={adminData?.id}
          />

          <ProvidersTab
            activeTab={providerStatus}
            click={onUpdateStatusFilterTab}
          />

          <ApplicationTable
            tableColumns={columns}
            tableData={data}
            query={searchProvider}
            onUpdateQuery={(e) => onUpdateSearchProvider(e.target.value)}
            perPage={perPage}
            onUpdatePerPageItem={onUpdatePerPageItem}
            filterFromDate={providerFrom as Date}
            onUpdateFilterFromDate={onUpdateSelectFrom}
            filterToDate={providerTo as Date}
            onUpdateFilterToDate={onUpdateSelectTo}
            noOfPages={noOfPages}
            totalCount={totalProviders}
            resultFrom={resultFrom}
            resultTo={resultTo}
            onClickNext={onClickNext}
            onClickPrevious={onClickPrevious}
            currentPage={currentPage}
            onEnterPageNumber={onEnterPageNumber}
            containerClassName={`mt-8`}
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProvider;
