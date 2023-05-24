import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { axiosGetRequest } from "../../lib/axios";
import {GetHospitalResponseData} from "../../types/superadmin";


export const useHospitalOrganisation = () => {
  const navigate = useNavigate();
  const [hospitalTabs, setHospitalTabs] = useState<'All' | 'Pending' | 'Active' | 'Deactivated'>('All');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [searchOrganisation, setSearchOrganisation] = useState('');
  const [showPerPage, setShowPerPage] = useState(false);
  const [hospitalFilterFrom, setHospitalFilterFrom] = useState<Date | null>();
  const [hospitalFilterTo, setHospitalFilterTo] = useState<Date | null>();
  const [hospitalData, setHospitalData] = useState<GetHospitalResponseData[]>([]);

  useEffect(() => {
    // const getHospitalData = async () => {
    //   const response = await axiosGetRequest('/account/super-admin/hospitals')
    //
    //   if (response.success) {
    //     setHospitalData(response?.data as GetHospitalResponseData[])
    //   }
    // }
    //
    // getHospitalData()
    //   .catch(err => {
    //     navigate('/superadmin/login')
    //   })
  }, [navigate]);

  const onUpdateSelectFrom = (value:Date | null) => {
    setHospitalFilterFrom(value)
  }

  const onUpdateSelectTo = (value: Date | null) => {
    setHospitalFilterTo(value)
  }

  const onUpdateSearchOrganisation = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSearchOrganisation(event.target.value)
  }

  const onUpdateActiveTab = (tab:'All' | 'Pending' | 'Active' | 'Deactivated') => {
    setHospitalTabs(tab)
  }

  const onUpdatePerPageItem = (value: 'All' | 10 | 20 | 50 | 100) => {
    console.log(value)
    setPerPage(value)
    setShowPerPage(!showPerPage)
  }

  return {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    showPerPage,
    hospitalData,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onUpdateSelectFrom,
    onUpdateSelectTo,
  }
}