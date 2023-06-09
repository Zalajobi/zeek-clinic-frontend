import {ChangeEvent, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {axiosGetRequest} from "../../lib/axios";
import toast from "react-hot-toast";
import {HospitalOrganizationData, SuperadminSiteData} from "../../types/superadmin";

export const useOrganizationDetails = () => {
  const { hospitalId } = useParams();
  const [organization, setOrganization] = useState<HospitalOrganizationData | null>(null);
  const [sites, setSites] = useState<SuperadminSiteData[] | null>(null);
  const [activeTabs, setActiveTabs] = useState<'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE'>('ALL');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [resultFrom, setResultFrom] = useState(0);
  const [resultTo, setResultTo] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [searchSite, setSearchSite] = useState('');
  const [dateFilterTo, setDateFilterTo] = useState<Date | null>();
  const [dateFilterFrom, setDateFilterFrom] = useState<Date | null>();
  const [countryFilter, setCountryFilter] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosGetRequest('/account/hospital/details', {
        id: hospitalId
      })

      if (response.success) {
        console.log(response.data)
        setOrganization(response.data.hospital as HospitalOrganizationData)
        setSites(response?.data?.sites)
        setNoOfPages(Math.ceil(response.data.tableData.sites / (perPage !== 'All' ? perPage : 0)))
        setTotalData(response.data.tableData.sites)
        setResultFrom(1)
        setResultTo((currentPage + 1 === noOfPages) ? response.data.tableData.sites : ((currentPage) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))
      } else {
        toast.error(response.mesage)
      }
    }

    getData()
      .catch(err => {
        toast.error('Response')
      })
  }, [hospitalId]);

  const onUpdateActiveTab = async (tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE') => {
    setActiveTabs(tab)
    console.log(tab)
  }

  const onClickNext = async (value:number) => {
    if (value >= noOfPages)
      toast.error("You are on the last page")
    else {
      setCurrentPage(value)

      setResultFrom(((value) * (perPage !== 'All' ? perPage : 0)) + 1)
      setResultTo((value + 1 === noOfPages) ? totalData : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: dateFilterFrom,
        to_date: dateFilterTo,
        search: searchSite,
        country: countryFilter,
        status: activeTabs === 'ALL' ? '' : activeTabs,
        hospital_id: hospitalId
      }

      const response = await axiosGetRequest('/account/site/organization/table-filter', params)

      if (response.success) {
        console.log(response.data)
        setSites(response?.data?.hospitals as SuperadminSiteData[])
        setTotalData(response?.data?.count as number)
        setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
      }
    }
  }

  const onClickPrevious = async (value:number) => {
    if (value === -1)
      toast.error("You are on the first page")
    else {
      setCurrentPage(value)

      // setResultFrom(((value) * (perPage !== 'All' ? perPage : 0)) + 1)
      // setResultTo((value + 1 === noOfPages) ? totalHospitals : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        // from_date: hospitalFilterFrom,
        // to_date: hospitalFilterTo,
        // search: searchOrganisation,
        // country: countryFilter,
        // status: hospitalTabs === 'ALL' ? '' : hospitalTabs
      }

      const response = await axiosGetRequest('/account/super-admin/hospitals', params)

      if (response.success) {
        // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
        // setTotalHospitals(response?.data?.count as number)
        // setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
      }
    }
  }

  const onUpdateSelectFrom = async (value: Date | null) => {
    setDateFilterFrom(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: dateFilterTo,
      search: searchSite,
      // country: countryFilter,
      status: activeTabs === 'ALL' ? '' : activeTabs,
    }

    setResultFrom(((perPage !== 'All' ? perPage : 0)) + 1)
    setResultTo((1 === noOfPages) ? totalData : ((currentPage) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))
    setCurrentPage(0)

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.datadata?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.datadata?.count as number)
      // setNoOfPages(Math.ceil(response?.datadata?.count / (perPage === 'All' ? response?.datadata?.count : perPage)))
    }
  }

  const onUpdateSelectTo = async (value: Date | null) => {
    setDateFilterTo(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: value,
      search: searchSite,
      // country: countryFilter,
      status: activeTabs === 'ALL' ? '' : activeTabs,
    }

    setResultFrom(((currentPage) * (perPage !== 'All' ? perPage : 0)) + 1)
    setResultTo((currentPage + 1 === noOfPages) ? totalData : ((currentPage) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.data?.count as number)
      // setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
    }
  }

  const onEnterPageNumber = async (value:number | string) => {
    if (value <= 0)
      toast.error("You are on the first page")
    else if (value > noOfPages)
      toast.error("You Cannot go beyond the last page")
    else {
      const pageNumber = value ? Number(value) : 0
      setCurrentPage(pageNumber - 1)


      // setResultFrom(((pageNumber - 1) * (perPage !== 'All' ? perPage : 0)) + 1)
      // setResultTo(((pageNumber - 1) === noOfPages) ? totalHospitals : ((pageNumber - 1) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

      const params = {
        page: pageNumber - 1,
        per_page: perPage === 'All' ? 0 : perPage,
        // from_date: hospitalFilterFrom,
        // to_date: hospitalFilterTo,
        // search: searchOrganisation,
        // country: countryFilter,
        // status: hospitalTabs === 'ALL' ? '' : hospitalTabs
      }

      const response = await axiosGetRequest('/account/super-admin/hospitals', params)

      if (response.success) {
        // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
        // setTotalHospitals(response?.data?.count as number)
        // setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
      }
    }
  }

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {

    setPerPage(value)
    // setNoOfPages(Math.ceil(totalHospitals / (value === 'All' ? totalHospitals : value)))
    setResultFrom(1)
    // setResultTo(value === 'All' ? totalHospitals : value)
    setCurrentPage(0)

    const params = {
      page: 0,
      per_page: value === 'All' ? 0 : value,
      // from_date: hospitalFilterFrom,
      // to_date: hospitalFilterTo,
      // search: searchOrganisation,
      // country: countryFilter,
      // status: hospitalTabs === 'ALL' ? '' : hospitalTabs
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.data?.count as number)
    }
  }

  const onUpdateSearchSite = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchSite(event.target.value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      // from_date: hospitalFilterFrom,
      // to_date: hospitalFilterTo,
      // search: event.target.value,
      // status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    }

    // setResultFrom(1)
    // setCurrentPage(0)

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.data?.count as number)
      // setResultTo(perPage === 'All' ? response?.data?.count : perPage)
      // setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
    }
  }

  return {
    // Values
    hospitalId,
    organization,
    activeTabs,
    sites,
    perPage,
    currentPage,
    noOfPages,
    resultFrom,
    resultTo,
    totalData,
    searchSite,
    countryFilter,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onEnterPageNumber,
    onUpdatePerPageItem,
    onUpdateSearchSite,
  }
}