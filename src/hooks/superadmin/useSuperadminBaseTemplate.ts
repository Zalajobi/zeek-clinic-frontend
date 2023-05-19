import {useEffect, useState} from "react";
import {axiosGetRequest} from "../../lib/axios";
import {useNavigate} from "react-router-dom";

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState();

  useEffect(() => {

    const getHeaderData = async () => {
      const response = await axiosGetRequest('/account/super-admin/profile/get-data')

      if (response.success)
        setRequestData(response?.data)
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
