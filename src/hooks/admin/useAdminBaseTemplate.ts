import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosGetRequestUserService } from '@lib/axios';
import { AdminHeaderBaseTemplateData } from '@typeSpec/admin';

export const useAdminBaseTemplate = () => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState<string>('');
  const [requestData, setRequestData] =
    useState<AdminHeaderBaseTemplateData | null>(null);

  useEffect(() => {
    const getHeaderData = async () => {
      const response = await axiosGetRequestUserService(
        '/admin/profile/details'
      );

      if (response.success) {
        localStorage.setItem('adminData', JSON.stringify(response?.data));
        setRequestData(response?.data as AdminHeaderBaseTemplateData);
      }
    };

    const adminData = localStorage.getItem('adminData');

    if (!adminData) {
      getHeaderData().catch(() => {
        navigate('/admin/login');
      });
    } else {
      setRequestData(JSON.parse(adminData) as AdminHeaderBaseTemplateData);
    }
  }, []);

  const onUpdateQuerySearch = (value: string) => setQuerySearch(value);

  return {
    navigate,
    querySearch,
    requestData,

    onUpdateQuerySearch,
  };
};
