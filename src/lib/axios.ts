import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { CookieJar } from 'tough-cookie';
import { wrapper } from 'axios-cookiejar-support';

const cookieJar = new CookieJar();
// const userInstance = axios.create({
//   baseURL: `${process.env.REACT_APP_DEV_BASE_URL}/account`,
//   timeout: 7500,
// })

const userInstance = wrapper(
  axios.create({
    baseURL: `${process.env.REACT_APP_DEV_BASE_URL}/account`,
    timeout: 7500,
    jar: cookieJar,
    withCredentials: true,
  })
);
// userInstance.defaults.jar = jar;

// userInstance.interceptors.request.use(async (config) => {
//   // const { data: auth } = await supabase.auth.getSession();
//
//   config.headers = {
//     ...config.headers,
//     test_authorization: `Bearer auth.session.access_token`,
//     withCredentials: true,
//   } as unknown as AxiosRequestHeaders; // Convert to 'unknown' first
//   return config;
// });

// userInstance.interceptors.response.use((response: AxiosResponse) => {
//   console.log(response);
//
//   if (response.headers['set-cookie']) {
//     document.cookie = response.headers['set-cookie'][0];
//   }
//   return response;
// });

const baseURL = `${process.env.REACT_APP_DEV_BASE_URL}/account`;

export const axiosPostRequestUserService = async (url: string, data: any) => {
  // try {
  //   const token = localStorage.getItem('token');
  //   const response = await fetch(`${baseURL}${url}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`,
  //       // withCredentials is not a header, so we don't include it here
  //     },
  //     credentials: 'include', // Include credentials (cookies) in the request
  //     body: JSON.stringify(data),
  //   });
  //
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //
  //   const responseData = await response.json();
  //   return responseData as AccountServiceApiResponse;
  // } catch (error) {
  //   if (error instanceof Error) {
  //     console.error('Fetch error:', error.message);
  //     throw error;
  //   } else {
  //     throw new Error('An unexpected error occurred');
  //   }
  // }

  try {
    const request = await userInstance.post(url, data, {
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
    const request = await userInstance.put(url, data, {
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

export const axiosDeleteRequestUserService = async (url: string) => {
  try {
    const request = await userInstance.delete(url, {
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
    const request = await userInstance.get(url, {
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
