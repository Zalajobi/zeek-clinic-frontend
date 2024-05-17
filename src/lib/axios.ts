import axios, { AxiosRequestHeaders } from 'axios';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';

const userInstance = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_BASE_URL}/account`,
  timeout: 7500,
  withCredentials: true,
});

userInstance.interceptors.request.use(async (config) => {
  config.headers = {
    ...config.headers,
  } as unknown as AxiosRequestHeaders; // Convert to 'unknown' first
  return config;
});

export const axiosPostRequestUserService = async (url: string, data: any) => {
  try {
    const request = await userInstance.post(url, data);

    return request.data as AccountServiceApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const axiosPutRequestUserService = async (url: string, data: any) => {
  try {
    const request = await userInstance.put(url, data);

    return request.data as AccountServiceApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const axiosDeleteRequestUserService = async (url: string) => {
  try {
    const request = await userInstance.delete(url);

    return request.data as AccountServiceApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const axiosGetRequestUserService = async (url: string, params?: any) => {
  try {
    const request = await userInstance.get(url, {
      params,
    });

    return request.data as AccountServiceApiResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
