import { useQuery } from 'react-query';
import { AccountServiceApiResponse } from '../types/apiResponses';
import { axiosGetRequestUserService } from './axios';

export function ReactQueryDataUserService(
  url: string,
  key: string,
  stateMonitor?: string | boolean | number
) {
  const { data, isLoading, error } = useQuery<
    AccountServiceApiResponse,
    boolean,
    Error
  >([key, stateMonitor], function () {
    return axiosGetRequestUserService(url);
  });

  return [data, isLoading, error];
}
