import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useLatestUnit = () => {
  const { siteId } = useParams();
  const [createUnitModal, setCreateUnitModal] = useState(false);

  // Get the Latest Department
  const { data: units, isLoading: unitsLoading } = useQuery({
    queryKey: ['getLatestUnitData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/unit/search`, {
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

  const onUpdateCreateUnitModal = () => setCreateUnitModal((cur) => !cur);

  return {
    siteId,
    unitsLoading,
    units,
    createUnitModal,

    onUpdateCreateUnitModal,
  };
};
