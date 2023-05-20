import {useEffect, useState} from "react";
import {axiosGetRequest} from "../../lib/axios";
import {useNavigate} from "react-router-dom";
import {SuperadminBaseData} from "../../types/superadmin";

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<SuperadminBaseData | null>();

  useEffect(() => {

    const getHeaderData = async () => {
      const response = await axiosGetRequest('/account/super-admin/profile/get-data')

      if (response.success)
        setRequestData(response?.data as SuperadminBaseData)
    }

    getHeaderData()
      .catch(err => {
        navigate('/superadmin/login')
      })
  }, [navigate] );


  return {
    requestData
  }
}
