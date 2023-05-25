import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { axiosGetRequest } from "../../lib/axios";
import {GetHospitalResponseData} from "../../types/superadmin";
import toast from "react-hot-toast";


export const useHospitalOrganisation = () => {
  const navigate = useNavigate();
  const [hospitalTabs, setHospitalTabs] = useState<'All' | 'Pending' | 'Active' | 'Deactivated' | 'Archived'>('All');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [resultFrom, setResultFrom] = useState(0);
  const [resultTo, setResultTo] = useState(0);
  const [searchOrganisation, setSearchOrganisation] = useState('');
  const [totalHospitals, setTotalHospitals] = useState<number>(0);
  const [hospitalFilterFrom, setHospitalFilterFrom] = useState<Date | null>();
  const [hospitalFilterTo, setHospitalFilterTo] = useState<Date | null>();
  const [hospitalData, setHospitalData] = useState<GetHospitalResponseData[]>([]);

  useEffect(() => {
    const getHospitalData = async () => {
      const params = {
        page: currentPage,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
      }
      const response = await axiosGetRequest('/account/super-admin/hospitals', params)

      if (response.success) {
        setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
        setTotalHospitals(response?.data?.count as number)
        setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
        setResultTo((currentPage * (perPage === 'All' ? response?.data?.count : perPage)) + (currentPage === 0 ? response?.data?.count : (perPage === 'All' ? response?.data?.count : perPage)))
        setResultFrom((currentPage * (perPage === 'All' ? response?.data?.count : perPage)) + (currentPage === 0 ? 0 : 1)  )
        // setResponseDataObject(response?.data)
      }
    }

    getHospitalData()
      .catch(err => {
        navigate('/superadmin/login')
      })
  }, [navigate]);

  const onUpdateSelectFrom = async (value: Date | null) => {
    setHospitalFilterFrom(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setResponseDataObject(response?.data)
    }
  }

  const onUpdateSelectTo = async (value: Date | null) => {
    setHospitalFilterTo(value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: value,
      search: searchOrganisation,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setResponseDataObject(response?.data)
    }
  }

  const onUpdateSearchOrganisation = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchOrganisation(event.target.value)
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: event.target.value,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setResponseDataObject(response?.data)
    }
  }

  const onUpdateActiveTab = (tab:'All' | 'Pending' | 'Active' | 'Deactivated' | 'Archived') => {
    setHospitalTabs(tab)
  }

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value)
    setNoOfPages(Math.ceil(totalHospitals / (value === 'All' ? totalHospitals : value)))
    // setResultFrom((currentPage * (value === 'All' ? totalHospitals : value)) + (currentPage === 0 ? 0 : 1)  )
    // setResultTo((currentPage * (value === 'All' ? totalHospitals : value)) + (currentPage === 0 ? totalHospitals : (value === 'All' ? totalHospitals : value)))
    if (currentPage === 0)
      setResultFrom(1)
    else
      setResultFrom((currentPage + 1) * (value !== 'All' ? value : 0))

    const params = {
      page: 0,
      per_page: value === 'All' ? 0 : value,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
    }

    // if (currentPage === 0)
      setResultFrom(1)
    // else
    //   setResultFrom((currentPage + 1) * (value !== 'All' ? value : 0))

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      setTotalHospitals(response?.data?.count as number)
    }
  }

  const onClickSortParameters = (value: 'name' | 'email'| 'created_at' | 'country' | 'state' | 'phone' | 'site_count' | 'address' | 'city') => {
    hospitalData.sort((a:any, b:any) => {
      if (a.name !== b.name) {
        return a.name - b.name;
      } else {
        return b.name.localeCompare(a.name);
      }
    })
    // hospitalData.sort((a:any, b:any) => (a[value] - b[value]) ? 1 : -1  )
    // console.log(hospitalData.sort((a:any, b:any) => (a[value] - b[value]) ? 1 : -1  ))
  }

  const setResponseDataObject = (data:{
    hospitals: GetHospitalResponseData[],
    count: number
  }) => {
    setHospitalData(data?.hospitals as GetHospitalResponseData[])
    setTotalHospitals(data?.count as number)
    setNoOfPages(Math.ceil(data?.count / (perPage === 'All' ? data?.count : perPage)))

    // if (currentPage === 0) {
    //   setResultFrom(currentPage + 1)
    // }
    // else {
    //   setResultFrom(((currentPage + 1) * (perPage === 'All' ? 0 : perPage)) + 1)
    // }
  }

  const onClickNext = async (value:number) => {
    if (value >= noOfPages)
      toast.error("You are on the last page")
    else {
      setCurrentPage(value)

      setResultFrom(((value) * (perPage !== 'All' ? perPage : 0)) + 1)
      setResultTo((value + 1 === noOfPages) ? totalHospitals : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: hospitalFilterFrom,
        to_date: hospitalFilterTo,
        search: searchOrganisation,
      }

      const response = await axiosGetRequest('/account/super-admin/hospitals', params)

      if (response.success) {
        setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
        setTotalHospitals(response?.data?.count as number)
        setNoOfPages(Math.ceil(response?.data?.count / (perPage === 'All' ? response?.data?.count : perPage)))
      }
    }
  }

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

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onClickSortParameters,
    onClickNext,
  }
}