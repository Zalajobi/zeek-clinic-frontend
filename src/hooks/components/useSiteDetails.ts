import { useQuery } from 'react-query';
import { axiosGetRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const useSiteDetails = () => {
  const { siteId } = useParams();

  // Get Site Details
  const { data: siteData, isLoading } = useQuery({
    queryKey: ['getHospitalDetails'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(`/site/details/${siteId}`);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get site Role Count
  const { data: roleCount, isLoading: roleCountLoading } = useQuery({
    queryKey: ['getRoleCount'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(`/role/count/${siteId}`);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get site Role Count
  const { data: departmentCount, isLoading: departmentCountLoading } = useQuery(
    {
      queryKey: ['getDepartmentCount'],
      queryFn: async () => {
        try {
          return await axiosGetRequestUserService(
            `/department/count/${siteId}`
          );
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            toast.error(error.response.data.error?.message);
          }
        }
      },
    }
  );

  return {
    siteData,
    isLoading,
    roleCount,
    roleCountLoading,
    departmentCount,
    departmentCountLoading,
  };
};
