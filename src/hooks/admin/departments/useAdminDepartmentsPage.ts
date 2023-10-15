import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';

export const useAdminDepartmentsPage = () => {
  const { siteId } = useParams();

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['siteInfoData', siteId],
    function () {
      return axiosGetRequestUserService(
        `/site/admin/get/information/${siteId}`
      );
    }
  );

  return {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,

    // Functions
  };
};
