import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { Datepicker, initTE, Input, Ripple, Select, Modal } from 'tw-elements';
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
        '/admin/profile/get-data'
      );

      if (response.success) {
        localStorage.setItem('adminData', JSON.stringify(response?.data));
        setRequestData(response?.data as AdminHeaderBaseTemplateData);
      }
    };

    const adminData = localStorage.getItem('adminData');

    if (!adminData) {
      getHeaderData().catch((err) => {
        navigate('/admin/login');
      });
    } else {
      setRequestData(JSON.parse(adminData) as AdminHeaderBaseTemplateData);
    }

    initTE({ Datepicker, Input, Select, Ripple, Modal });
  }, []);

  const onUpdateQuerySearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event?.target?.value as string);
  };

  return {
    navigate,
    querySearch,
    requestData,

    onUpdateQuerySearch,
  };
};
