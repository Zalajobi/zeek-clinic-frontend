import axios from 'axios';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_BASE_URL}/account`,
  timeout: 7500,
});

export const axiosPostRequestUserService = async (url: string, data: any) => {
  try {
    const request = await instance.post(url, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token') as string}`,
      },
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

export const axiosPutRequestUserService = async (url: string, data: any) => {
  try {
    const request = await instance.put(url, data, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token') as string}`,
      },
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

export const axiosDeleteRequest = async (url: string) => {
  try {
    const request = await instance.delete(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token') as string}`,
      },
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

export const axiosGetRequestUserService = async (url: string, params?: any) => {
  try {
    const request = await instance.get(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token') as string}`,
      },
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
