import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosGetRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const useSiteProvidersPage = () => {
  const { siteId } = useParams();
  const [addProviderModal, setAddProviderModal] = useState(false);

  const handleAddProviderModal = () => {
    setAddProviderModal((cur) => !cur);
  };

  // Get Role Chart Data
  const { data: roleCharts, isLoading: roleChartsLoading } = useQuery({
    queryKey: ['getRoleCharts'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(`/role/chart`, {
          siteId,
          toDate: '2024-05-16T11:33:52.622772Z',
          fromDate: '2023-05-16T11:33:52.622772Z',
          groupBy: 'week',
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  return {
    // Values
    addProviderModal,
    roleCharts,
    roleChartsLoading,

    // Functions
    handleAddProviderModal,
  };
};
