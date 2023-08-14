import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/layout/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '../../hooks/admin/useAdminProviderPage';
import { Typography } from '../../components/global/dialog/Typography';
import AdminRoutes from '../../components/admin/AdminRoutes';
import AdminSiteInfo from '../../components/admin/AdminSiteInfo';
import { ProviderPageSiteResponseData } from '../../types/admin';
import { ApplicationTable } from '../../components/global/table/ApplicationTable';

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

    // Functions
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onUpdateSearchProvider,
    onUpdateStatusFilterTab,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
  } = useAdminProviderPage();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  const columns: any = [];
  const data: any = [];

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <AdminSiteInfo data={siteData as ProviderPageSiteResponseData} />

          <AdminRoutes
            siteId={siteData?.id ?? ''}
            id={adminData?.id}
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
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProvider;
