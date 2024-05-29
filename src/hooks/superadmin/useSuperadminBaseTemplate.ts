import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosGetRequestUserService } from '@lib/axios';

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<any>();
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    const getHeaderData = async () => {
      const response = await axiosGetRequestUserService(
        '/super-admin/profile/get-data'
      );

      if (response.success) setRequestData(response?.data);
    };

    getHeaderData().catch(() => {
      navigate('/superadmin/login');
    });
  }, [navigate]);

  const onUpdateQuerySearch = (event: string) => setQuerySearch(event);

  return {
    // Values
    querySearch,
    requestData,

    // Functions
    onUpdateQuerySearch,
  };
};
