import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {axiosGetRequest} from "../../lib/axios";
import toast from "react-hot-toast";

export const useOrganizationDetails = () => {
  const { hospitalId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await axiosGetRequest('/account/hospital/details')

      console.log(response.data)
    }

    getData()
      .catch(err => {
        toast.error('Response')
      })
  }, [hospitalId]);

  return {
    // Values
    hospitalId,
  }
}