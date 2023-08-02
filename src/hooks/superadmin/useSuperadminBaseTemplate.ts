import { ChangeEvent, useEffect, useState } from 'react';
import { axiosGetRequest } from '../../lib/axios';
import { useNavigate } from 'react-router-dom';
import { SuperadminBaseData } from '../../types/superadmin';
import { Datepicker, initTE, Input, Ripple, Select } from 'tw-elements';

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<SuperadminBaseData | null>();
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    const getHeaderData = async () => {
      const response = await axiosGetRequest(
        '/account/super-admin/profile/get-data'
      );

      if (response.success)
        setRequestData(response?.data as SuperadminBaseData);
    };

    getHeaderData().catch((err) => {
      navigate('/superadmin/login');
    });
    initTE({ Datepicker, Input, Select, Ripple });
  }, [navigate]);

  const onUpdateQuerySearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuerySearch(event?.target?.value as string);
  };

  return {
    // Values
    querySearch,
    requestData,

    // Functions
    onUpdateQuerySearch,
  };
};
