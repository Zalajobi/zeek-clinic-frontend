import {ChangeEvent, useEffect, useState} from "react";
import {axiosGetRequest} from "../../lib/axios";
import {useNavigate} from "react-router-dom";
import {SuperadminBaseData} from "../../types/superadmin";

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<SuperadminBaseData | null>();
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    const getHeaderData = async () => {
      const response = await axiosGetRequest('/account/super-admin/profile/get-data', localStorage.getItem('token') as string)

      if (response.success)
        setRequestData(response?.data as SuperadminBaseData)
    }

    getHeaderData()
      .catch(err => {
        navigate('/superadmin/login')
      })
  }, [navigate] );


  const onUpdateQuerySearch = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target?.value)
    setQuerySearch(event?.target?.value as string)
  }


  return {
    // Values
    querySearch,
    requestData,

    // Functions
    onUpdateQuerySearch
  }
}
