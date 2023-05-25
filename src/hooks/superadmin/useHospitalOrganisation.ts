import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { axiosGetRequest } from "../../lib/axios";
import {GetHospitalResponseData} from "../../types/superadmin";


export const useHospitalOrganisation = () => {
  const navigate = useNavigate();
  const [hospitalTabs, setHospitalTabs] = useState<'All' | 'Pending' | 'Active' | 'Deactivated' | 'Archived'>('All');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
      page: 1,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      setTotalHospitals(response?.data?.count as number)
      console.log(response?.data)
    }
  }

  const onUpdateSelectTo = async (value: Date | null) => {
    setHospitalFilterTo(value)
    const params = {
      page: 1,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: value,
      search: searchOrganisation,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      setTotalHospitals(response?.data?.count as number)
      console.log(response?.data)
    }
  }

  const onUpdateSearchOrganisation = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchOrganisation(event.target.value)
    const params = {
      page: 1,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: event.target.value,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      setTotalHospitals(response?.data?.count as number)
      console.log(response?.data)
    }
  }

  const onUpdateActiveTab = (tab:'All' | 'Pending' | 'Active' | 'Deactivated' | 'Archived') => {
    setHospitalTabs(tab)
  }

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value)
    const params = {
      page: 1,
      per_page: value === 'All' ? 0 : value,
      from_date: hospitalFilterFrom,
      to_date: hospitalFilterTo,
      search: searchOrganisation,
    }

    const response = await axiosGetRequest('/account/super-admin/hospitals', params)

    if (response.success) {
      setHospitalData(response?.data?.hospitals as GetHospitalResponseData[])
      setTotalHospitals(response?.data?.count as number)
      console.log(response?.data)
    }
  }

  return {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    hospitalData,
    currentPage,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onUpdateSelectFrom,
    onUpdateSelectTo,
  }
}