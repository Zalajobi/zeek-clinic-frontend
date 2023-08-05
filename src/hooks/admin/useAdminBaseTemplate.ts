import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { axiosGetRequest } from '../../lib/axios';
import { AdminHeaderBaseTemplateData } from '../../types/admin';
import { Datepicker, initTE, Input, Ripple, Select, Modal } from 'tw-elements';

export const useAdminBaseTemplate = () => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState<string>('');
  const [requestData, setRequestData] =
    useState<AdminHeaderBaseTemplateData | null>(null);

  useEffect(() => {
    const getHeaderData = async () => {
      const response = await axiosGetRequest('/account/admin/profile/get-data');

      if (response.success) {
        setRequestData(response?.data as AdminHeaderBaseTemplateData);
      }
    };

    getHeaderData().catch((err) => {
      navigate('/admin/login');
    });

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
