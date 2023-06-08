import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {axiosGetRequest} from "../../lib/axios";
import toast from "react-hot-toast";
import {GetHospitalResponseData, HospitalOrganizationData, SuperadminSiteData} from "../../types/superadmin";

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

  useEffect(() => {
    const getData = async () => {
      const response = await axiosGetRequest('/account/hospital/details', {
        id: hospitalId
      })

      if (response.success) {
        console.log(response.data)
        setOrganization(response.data.hospital as HospitalOrganizationData)
        setSites(response?.data?.sites)
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

      // setResultFrom(((value) * (perPage !== 'All' ? perPage : 0)) + 1)
      // setResultTo((value + 1 === noOfPages) ? totalHospitals : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

      const params = {
        page: value,
        // per_page: perPage === 'All' ? 0 : perPage,
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
    // setHospitalFilterFrom(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      // to_date: hospitalFilterTo,
      // search: searchOrganisation,
      // country: countryFilter,
      // status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    }

    // setResultFrom(((perPage !== 'All' ? perPage : 0)) + 1)
    // setResultTo((1 === noOfPages) ? totalHospitals : ((currentPage) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))
    // setCurrentPage(0)

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.datadata?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.datadata?.count as number)
      // setNoOfPages(Math.ceil(response?.datadata?.count / (perPage === 'All' ? response?.datadata?.count : perPage)))
    }
  }

  const onUpdateSelectTo = async (value: Date | null) => {
    // setHospitalFilterTo(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      // from_date: hospitalFilterFrom,
      to_date: value,
      // search: searchOrganisation,
      // country: countryFilter,
      // status: hospitalTabs === 'ALL' ? '' : hospitalTabs,
    }

    // setResultFrom(((currentPage) * (perPage !== 'All' ? perPage : 0)) + 1)
    // setResultTo((currentPage + 1 === noOfPages) ? totalHospitals : ((currentPage) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      // setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      // setTotalHospitals(response?.data?.count as number)
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

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdateSelectFrom,
    onUpdateSelectTo,
  }
}