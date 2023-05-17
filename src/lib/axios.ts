import axios from "axios";

// interface AxiosPostRequestNoAuthProps {
//   url: string
//   data: any
// }

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/zeek-clinic',
  timeout: 7500,
  headers: {
    token: localStorage.getItem('token')
  }
})

export const axiosPostRequest = async (url:string, data:any) => {
  const request = await instance.post(url, data)

  return request.data
}

export const axiosPutRequest = async (url:string, data:any) => {
  const request = await instance.put(url, data)

  return request.data
}

export const axiosGetRequest = async (url:string) => {
  const request = await instance.get(url)

  return request.data
}