import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useProviderBaseTemplate = () => {
  const navigate = useNavigate();
  // const [requestData, setRequestData] = useState<SuperadminBaseData | null>();
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    // const getHeaderData = async () => {
    //   const response = await axiosGetRequestUserService('/super-admin/profile/get-data')
    //
    //   if (response.success)
    //     setRequestData(response?.data as SuperadminBaseData)
    // }
    // getHeaderData()
    //   .catch(err => {
    //     navigate('/superadmin/login')
    //   })/
  }, [navigate]);

  const onUpdateQuerySearch = (event: string) => setQuerySearch(event);

  return {
    // Values
    querySearch,
    // requestData,

    // Functions
    onUpdateQuerySearch,
  };
};
