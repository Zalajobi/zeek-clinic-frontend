import { Fragment, useMemo } from 'react';
import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '@hooks/admin/useAdminProviderPage';
import { Typography } from '@components/global/dialog/Typography';
import AdminRoutes from '@components/admin/AdminRoutes';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import { ApplicationTable } from '@components/global/table/ApplicationTable';
import {
  AdminProviderDataColumn,
  AdminProviderDataRow,
} from '@components/tables/row-col-mapping/AdminTable';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNoOfPages,
  setResultFrom,
  setResultTo,
  setTotalProviders,
} from '../../redux/reducers/tableReducer';
import HorizontalTabs from '@components/global/HorizontalTabs';

const AdminProvider = () => {
  const dispatch = useDispatch();
  const { resultFrom, noOfPages, totalProviders, resultTo } = useSelector(
    (state: any) => state.adminProviderTable
  );
  const {
    // Values
    providerFrom,
    providerTo,
    currentPage,
    searchProvider,
    perPage,
    selectAllProviders,
    providerStatus,
    siteData,
    siteDataLoading,
    siteDataError,
    providerData,
    providerDataLoading,
    actions,
    tabLabelValue,

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

  if (!providerDataLoading) {
    // console.log(providersData?.data?.providers)
    const count = providerData?.data?.count;
    dispatch(setTotalProviders(count));
    dispatch(
      setNoOfPages(Math.ceil(count / (perPage === 'All' ? count : perPage)))
    );

    if (actions === 'page-load') {
      dispatch(setResultFrom(1));
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (
      actions === 'selectFrom' ||
      actions === 'selectTo' ||
      actions === 'search' ||
      actions === 'tab'
    ) {
      dispatch(
        setResultTo(
          1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'nextPage' || actions === 'previousPage') {
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'countryFilter') {
      dispatch(setResultTo(perPage === 'All' ? count : perPage * 1));
    }

    if (actions === 'pageNumber') {
      dispatch(
        setResultTo(
          currentPage === noOfPages
            ? totalProviders
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }
  }

  if (siteDataError) toast.error('Something Went Wrong Getting Site Data');

  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  const columns = useMemo(
    () => AdminProviderDataColumn(onUpdateSelectAllProviders),
    [onUpdateSelectAllProviders]
  );
  const data = useMemo(
    () =>
      AdminProviderDataRow(
        providerData?.data?.providers,
        onUpdateSelectedRow,
        selectAllProviders
      ) ?? [],
    [providerData?.data?.providers, onUpdateSelectedRow, selectAllProviders]
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

          <AdminSiteInfo
            dataLoading={siteDataLoading}
            id={siteData?.data?.id ?? ''}
            address={siteData?.data?.address ?? ''}
            name={siteData?.data?.name ?? ''}
            email={siteData?.data?.email ?? ''}
            country={siteData?.data?.country ?? ''}
            phone={siteData?.data?.phone ?? ''}
            state={siteData?.data?.state ?? ''}
            city={siteData?.data?.city ?? ''}
            created_at={siteData?.data?.city ?? ''}
          />

          <AdminRoutes
            siteId={siteData?.data?.id ?? ''}
            id={adminData?.id}
          />

          <HorizontalTabs
            className={`w-[75%] rounded-2xl`}
            changeTabFunction={onUpdateStatusFilterTab}
            labelValue={tabLabelValue}
            activeTab={providerStatus}
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
