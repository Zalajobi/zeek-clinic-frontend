import { useParams } from 'react-router-dom';
import { axiosGetRequestUserService } from '@lib/axios';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { getISODateWithOffset } from '@util/index';
import { ONE_MILLION } from '@lib/constants/constants';

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
  const [siteDistributionValue, setSiteDistributionValue] = useState<
    'Department' | 'Service Area' | 'Unit'
  >('Department');

  const [patientChartPayload, setPatientChartPayload] = useState({
    fromDate: getISODateWithOffset(-7),
    toDate: getISODateWithOffset(1),
    groupBy: 'day',
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

  const siteDistributionData = ['department', 'Service Area', 'unit'];

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

  // Get Site Distribution Chart Data
  const {
    data: patientDistributionChartData,
    isLoading: patientDistributionChartLoading,
  } = useQuery({
    queryKey: ['siteDistributionData', siteDistributionValue],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/patient/distribution/${siteDistributionValue}/${siteId}`
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
    setTabValue(value);
    switch (value) {
      case 'All':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-ONE_MILLION),
          toDate: getISODateWithOffset(1),
          groupBy: 'month',
          siteId,
        });
        break;

      case 'Last Day':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-1),
          toDate: getISODateWithOffset(1),
          groupBy: 'hour',
          siteId,
        });
        break;

      case 'Last Week':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-7),
          toDate: getISODateWithOffset(1),
          groupBy: 'day',
          siteId,
        });
        break;

      case 'Last 30 Days':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-30),
          toDate: getISODateWithOffset(1),
          groupBy: 'day',
          siteId,
        });
        break;

      case 'Last 180 Days':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-180),
          toDate: getISODateWithOffset(1),
          groupBy: 'week',
          siteId,
        });
        break;

      case 'Last 360 Days':
        setPatientChartPayload({
          fromDate: getISODateWithOffset(-360),
          toDate: getISODateWithOffset(1),
          groupBy: 'month',
          siteId,
        });
        break;
    }
  };

  const onUpdateSiteDistributionChart = (
    value: 'Department' | 'Service Area' | 'Unit'
  ) => {
    setSiteDistributionValue(value);
  };

  return {
    siteId,
    patientChartData,
    patientChartLoading,
    tabData,
    tabValue,
    siteDistributionData,
    siteDistributionValue,
    patientDistributionChartData,
    patientDistributionChartLoading,

    // Functions
    onUpdateChart,
    onUpdateSiteDistributionChart,
  };
};
