import axios from "axios";

// interface AxiosPostRequestNoAuthProps {
//   url: string
//   data: any
// }

const instance = axios.create({
  baseURL: process.env.REACT_APP_DEV_BASE_URL,
  timeout: 7500,
})

export const axiosPostRequest = async (url:string, data:any, token:string) => {
  const request = await instance.post(url, data, {
    headers: {
      token
    }
  })

  return request.data
}

export const axiosPutRequest = async (url:string, data:any, token:string) => {
  const request = await instance.put(url, data, {
    headers: {
      token
    }
  })

  return request.data
}

export const axiosGetRequest = async (url:string, params?:any) => {
  const request = await instance.get(url, {
    headers: {
      token: localStorage.getItem('token') as string
    },
    params
  })

  return request.data
}