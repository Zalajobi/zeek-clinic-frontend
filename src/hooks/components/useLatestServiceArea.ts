import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { axiosPostRequestUserService } from '@lib/axios';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useLatestServiceArea = () => {
  const { siteId } = useParams();
  const [createServiceAreaModal, setCreateServiceAreaModal] = useState(false);

  // Get the Latest Department
  const { data: serviceAreas, isLoading: serviceAreasLoading } = useQuery({
    queryKey: ['getLatestServiceAreaData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/service-area/search`, {
          siteId,
          sortModel: {
            colId: 'createdAt',
            sort: 'desc',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateCreateServiceAreaModal = () =>
    setCreateServiceAreaModal((cur) => !cur);

  return {
    siteId,
    createServiceAreaModal,
    serviceAreas,
    serviceAreasLoading,

    onUpdateCreateServiceAreaModal,
  };
};
