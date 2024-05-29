import { axiosGetRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

export const useHospitalDetails = () => {
  const { hospitalId } = useParams();

  // Get Hospital Details
  const { data: hospitalData, isLoading: hospitalDataLoading } = useQuery({
    queryKey: ['getHospitalDetails'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/hospital/details/${hospitalId}`
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get SiteDetailsPage Count Data
  const { data: siteCountData, isLoading: siteCountDataLoading } = useQuery({
    queryKey: ['getSiteCountData'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/site/status-counts/organization/${hospitalId}`
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  return {
    hospitalData,
    hospitalDataLoading,
    siteCountData,
    siteCountDataLoading,
  };
};
