import { useQuery } from 'react-query';
import { AccountServiceApiResponse } from '../types/apiResponses';
import { axiosGetRequestUserService } from './axios';

export function ReactQueryDataUserService(
  url: string,
  key: string,
  options?: any,
  stateMonitor?: string | boolean | number
) {
  const { status, isLoading, error, data } = useQuery<
    AccountServiceApiResponse,
    Error
  >(
    [key, stateMonitor],
    function () {
      return axiosGetRequestUserService(url);
    },
    options
  );
  const responseData = data;

  return {
    responseData,
    isLoading,
    error,
    status,
  };
}
