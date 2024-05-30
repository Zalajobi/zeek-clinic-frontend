import { useParams } from 'react-router-dom';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import { ONE_MILLION } from '@lib/constants/constants';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

export const useAddPatientModal = (handler: () => void) => {
  const { siteId } = useParams();
  const selectApiPayload = {
    siteId,
    startRow: 0,
    endRow: ONE_MILLION,
    sortModel: {
      colId: 'name',
      sort: 'asc',
    },
  };

  // Get Providers
  const { data: providerData, isLoading: providerDataLoading } = useQuery({
    queryKey: ['getProviders', siteId],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/provider/search`, {
          siteId,
          startRow: 0,
          endRow: ONE_MILLION,
          sortModel: {
            sort: 'asc',
            colId: 'firstName',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get Departments
  const { data: departments, isLoading: departmentsLoading } = useQuery({
    queryKey: ['getDepartments'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/department/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get Units
  const { data: units, isLoading: unitsLoading } = useQuery({
    queryKey: ['getUnits'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/unit/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get ServiceAreas
  const { data: serviceAreas, isLoading: serviceAreasLoading } = useQuery({
    queryKey: ['getServiceArea'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/service-area/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  return {
    // Values
    providerData,
    providerDataLoading,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,

    // Functions
  };
};
