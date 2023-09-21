import axios from 'axios';
import { AccountServiceApiResponse } from '../types/apiResponses';

// interface axiosPostRequestUserServiceNoAuthProps {
//   url: string
//   data: any
// }

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_BASE_URL}/account`,
  timeout: 7500,
});

export const axiosPostRequestUserService = async (url: string, data: any) => {
  const request = await instance.post(url, data, {
    headers: {
      token: localStorage.getItem('token') as string,
    },
  });

  return request.data;
};

export const axiosPutRequestUserService = async (url: string, data: any) => {
  const request = await instance.put(url, data, {
    headers: {
      token: localStorage.getItem('token') as string,
    },
  });

  return request.data;
};

export const axiosGetRequestUserService = async (url: string, params?: any) => {
  const request = await instance.get(url, {
    headers: {
      token: localStorage.getItem('token') as string,
    },
    params,
  });

  return request.data as AccountServiceApiResponse;
};
