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