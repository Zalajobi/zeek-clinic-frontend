import axios from "axios";

// interface AxiosPostRequestNoAuthProps {
//   url: string
//   data: any
// }

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/zeek-clinic',
  timeout: 7500
})

export const axiosPostRequestNoAuth = async (url:string, data:any) => {
  const request = await instance.post(url, data)

  return request.data
}

export const axiosPutRequestNoAuth = async (url:string, data:any) => {
  const request = await instance.put(url, data)

  return request.data
}

export const axiosGetRequestNoAuth = async (url:string) => {
  const request = await instance.get(url)

  return request.data
}