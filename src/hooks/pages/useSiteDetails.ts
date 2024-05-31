import { useParams } from 'react-router-dom';
import { axiosGetRequestUserService } from '@lib/axios';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { getISODateWithOffset } from '@util/index';

export const useSiteDetails = () => {
  const { siteId } = useParams();
  const [tabValue, setTabValue] = useState<
    | 'All'
    | 'Last Day'
    | 'Last Week'
    | 'Last 30 Days'
    | 'Last 180 Days'
    | 'Last 360 Days'
  >('Last Week');

  const [patientChartPayload, setPatientChartPayload] = useState({
    fromDate: getISODateWithOffset(-365),
    toDate: getISODateWithOffset(1),
    groupBy: 'week',
    siteId,
  });

  const tabData = [
    'All',
    'Last Day',
    'Last Week',
    'Last 30 Days',
    'Last 180 Days',
    'Last 360 Days',
  ];

  // Get Patient Chart Data
  const { data: patientChartData, isLoading: patientChartLoading } = useQuery({
    queryKey: ['getTableData', patientChartPayload],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/patient/chart`,
          patientChartPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateChart = (
    value:
      | 'All'
      | 'Last Day'
      | 'Last Week'
      | 'Last 30 Days'
      | 'Last 180 Days'
      | 'Last 360 Days'
  ) => {
    console.log(value);
    setTabValue(value);
  };

  return {
    siteId,
    patientChartData,
    patientChartLoading,
    tabData,
    tabValue,

    // Functions
    onUpdateChart,
  };
};
