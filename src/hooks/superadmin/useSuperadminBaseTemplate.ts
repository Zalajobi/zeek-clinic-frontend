import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Datepicker, initTE, Input, Ripple, Select, Modal } from 'tw-elements';
import { Simulate } from 'react-dom/test-utils';
import { axiosGetRequestUserService } from '@lib/axios';
import { SuperadminBaseData } from '@typeSpec/superadmin';
import input = Simulate.input;

export const useSuperadminBaseTemplate = () => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<SuperadminBaseData | null>();
  const [querySearch, setQuerySearch] = useState<string>('');

  useEffect(() => {
    initTE({ Datepicker, Input, Select, Ripple, Modal });
    const getHeaderData = async () => {
      const response = await axiosGetRequestUserService(
        '/super-admin/profile/get-data'
      );

      if (response.success)
        setRequestData(response?.data as SuperadminBaseData);
    };

    getHeaderData().catch((err) => {
      navigate('/superadmin/login');
    });
  }, [input]);

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
