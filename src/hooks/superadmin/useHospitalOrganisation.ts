import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axiosGetRequestUserService } from '@lib/axios';
import { GetHospitalResponseData } from '@typeSpec/superadmin';
import { customPromiseRequest } from '@lib/requests';
import { SelectInputFieldProps } from '@typeSpec/common';

export const useHospitalOrganisation = () => {
  const [hospitalTabs, setHospitalTabs] = useState<
    'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED' | 'ARCHIVED'
  >('ALL');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [resultFrom, setResultFrom] = useState(0);
  const [resultTo, setResultTo] = useState(0);
  const [searchOrganisation, setSearchOrganisation] = useState('');
  const [totalHospitals, setTotalHospitals] = useState<number>(0);
  const [hospitalFilterFrom, setHospitalFilterFrom] = useState<Date | null>();
  const [hospitalFilterTo, setHospitalFilterTo] = useState<Date | null>();
  const [hospitalData, setHospitalData] = useState<GetHospitalResponseData[]>(
    []
  );
  const [countryFilter, setCountryFilter] = useState('');
  const [allHospitalCountries, setAllHospitalCountries] = useState<
    SelectInputFieldProps[]
  >([]);
  const [selectAllHospitals, setSelectAllHospitals] = useState(false);

  let selectedHospitals: string[] = [];

  useEffect(() => {
    const getData = async () => {
      const params = {
        page: currentPage,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
        country: countryFilter,
        status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
      };

      // const [organization]

      const [organization, distinctCountries] = await customPromiseRequest([
        axiosGetRequestUserService(
          '/hospital/organization/hospitals/filters',
          params
        ),
        axiosGetRequestUserService('/hospital/distinct-countries'),
      ]);

      if (
        distinctCountries?.status === 'fulfilled' &&
        distinctCountries?.value?.success
      ) {
        let tempCountriesFilter: SelectInputFieldProps[] = [];

        distinctCountries?.value?.data.map((item: { country: string }) => {
          tempCountriesFilter.push({
            value: item?.country,
            placeholder: item?.country,
          });

          return;
        });
        setAllHospitalCountries(tempCountriesFilter);
      } else {
        toast.error('Something went wrong getting organization countries');
      }

      if (
        organization?.status === 'fulfilled' &&
        organization?.value?.success
      ) {
        setHospitalData(
          organization?.value?.data?.hospitals as GetHospitalResponseData[]
        );
        setTotalHospitals(organization?.value?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            organization?.value?.data?.count /
              (perPage === 'All' ? organization?.value?.data?.count : perPage)
          )
        );
        setResultTo(
          currentPage + 1 === noOfPages
            ? organization?.value?.data?.count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        );
        setResultFrom(1);
      } else {
        toast.error('Error getting list of organisation(s)');
      }
    };

    getData().catch((err) => {
      toast.error('Something went wrong');
      // navigate('/superadmin/login');
    });
  }, []);

  const onUpdateSelectFrom = async (value: Date | null) => {
    setHospitalFilterFrom(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
      country: countryFilter,
      status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    };

    setResultFrom((perPage !== 'All' ? perPage : 0) + 1);
    setResultTo(
      1 === noOfPages
        ? totalHospitals
        : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
    );
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateSelectTo = async (value: Date | null) => {
    setHospitalFilterTo(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: value,
      search: searchOrganisation,
      country: countryFilter,
      status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    };

    setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1);
    setResultTo(
      currentPage + 1 === noOfPages
        ? totalHospitals
        : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
    );

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateSearchOrganisation = async (value: string) => {
    setSearchOrganisation(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: value,
      status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    };

    setResultFrom(1);
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateActiveTab = async (
    tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED' | 'ARCHIVED'
  ) => {
    setHospitalTabs(tab);
    setResultFrom(1);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
      country: countryFilter,
      status: tab === 'ALL' ? '' : tab,
    };

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    setNoOfPages(
      Math.ceil(totalHospitals / (value === 'All' ? totalHospitals : value))
    );
    setResultFrom(1);
    setResultTo(value === 'All' ? totalHospitals : value);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: value === 'All' ? 0 : value,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
      country: countryFilter,
      status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    };

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
    }
  };

  const onClickSortParameters = (
    value:
      | 'name'
      | 'email'
      | 'created_at'
      | 'country'
      | 'state'
      | 'phone'
      | 'site_count'
      | 'address'
      | 'city'
  ) => {
    hospitalData.sort((a: any, b: any) => {
      if (a.name !== b.name) {
        return a.name - b.name;
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      setCurrentPage(value);

      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalHospitals
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
        country: countryFilter,
        status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
      };

      const response = await axiosGetRequestUserService(
        '/hospital/organization/hospitals/filters',
        params
      );

      if (response.success) {
        setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
        setTotalHospitals(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);

      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalHospitals
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
        country: countryFilter,
        status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
      };

      const response = await axiosGetRequestUserService(
        '/hospital/organization/hospitals/filters',
        params
      );

      if (response.success) {
        setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
        setTotalHospitals(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const filterByCountry = async (value: string) => {
    setCountryFilter(value);
    setResultFrom(1);
    setCurrentPage(0);

    // setResultTo((value + 1 === noOfPages) ? totalHospitals : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
      country: value,
      status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    };

    const response = await axiosGetRequestUserService(
      '/hospital/organization/hospitals/filters',
      params
    );

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
      setTotalHospitals(response?.data?.count as number);
      // setResultTo(perPage === 'All' ? response?.data?.count : perPage)
      setResultTo(perPage === 'All' ? response?.data?.count : perPage * 1);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onEnterPageNumber = async (value: number | string) => {
    if (value <= 0) toast.error('You are on the first page');
    else if (value > noOfPages)
      toast.error('You Cannot go beyond the last page');
    else {
      const pageNumber = value ? Number(value) : 0;
      setCurrentPage(pageNumber - 1);

      setResultFrom((pageNumber - 1) * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        pageNumber - 1 === noOfPages
          ? totalHospitals
          : (pageNumber - 1) * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: pageNumber - 1,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
        country: countryFilter,
        status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
      };

      const response = await axiosGetRequestUserService(
        '/hospital/organization/hospitals/filters',
        params
      );

      if (response.success) {
        setHospitalData(response?.data?.hospitals as GetHospitalResponseData[]);
        setTotalHospitals(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const onUpdateSelectedRow = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) selectedHospitals.push(id);
    else selectedHospitals = selectedHospitals.filter((item) => item !== id);
  };

  const onUpdateSelectAllHospitals = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectAllHospitals(event.target.checked);
  };

  return {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    hospitalData,
    currentPage,
    noOfPages,
    totalHospitals,
    resultFrom,
    resultTo,
    allHospitalCountries,
    selectAllHospitals,
    hospitalFilterFrom,
    hospitalFilterTo,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onClickSortParameters,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    filterByCountry,
    onUpdateSelectedRow,
    onUpdateSelectAllHospitals,
  };
};
