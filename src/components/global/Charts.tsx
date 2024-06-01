import { materialLineChartConfig, pieChard3dOptions } from '@util/constants';
import { Card, CardHeader, Spinner } from '@material-tailwind/react';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import Chart from 'react-apexcharts';
import { Typography } from '@components/global/dialog/Typography';
import { CustomCard } from '@components/global/card/CustomCard';
import { DropdownMenu } from '@components/global/MenuTabs';

interface CustomChartProps {
  data: any;
  title: string;
  width?: string;
  height?: string;
  className: string;
}

export const PieChart3D = ({
  data,
  title,
  width = '100%',
  height = '400px',
  className = '',
}: CustomChartProps) => {
  const options = {
    ...pieChard3dOptions,
    title,
  };

  return (
    <div className={className}>
      <h1>React Google Chart</h1>
      {/*<Chart*/}
      {/*  chartType="PieChart"*/}
      {/*  width={width}*/}
      {/*  height={height}*/}
      {/*  data={data}*/}
      {/*  options={options}*/}
      {/*/>*/}
    </div>
  );
};

interface LineAndBarChartProps {
  menuData: any[];
  label: string;
  updateChartTimeline: (value: any) => void;
  timeLine: string;
  type: 'line' | 'bar';
  loading: boolean;
  xAxis: string[] | number[];
  yAxis: string[] | number[];
  chartLabel: string;
}

export const LineAndBarChart = ({
  menuData,
  label,
  updateChartTimeline,
  timeLine,
  type,
  loading,
  xAxis,
  yAxis,
  chartLabel,
}: LineAndBarChartProps) => {
  const chartConfig = {
    type: type,
    series: [
      {
        name: chartLabel,
        data: yAxis,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: '',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#020617', '#F44336', '#E91E63', '#9C27B0', '#3975AE'],
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
        categories: xAxis,
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <CustomCard className="flex flex-col items-baseline justify-start w-full min-h-[400px]">
      <div
        className={`grid grid-cols-2 gap-4 w-full my-4 h-10 'md:grid-cols-2`}>
        <Typography
          Tag={'h4'}
          text={label}
          className="text-left mr-auto"
        />

        <DropdownMenu
          value={timeLine}
          menuItems={menuData}
          change={updateChartTimeline}
          buttonClass={`border-gray-100 h-[42px]`}
        />
      </div>

      {!loading ? (
        <div className="w-full">
          {/*// @ts-ignore*/}
          <Chart
            {...chartConfig}
            type={type}
            height="350"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}
    </CustomCard>
  );
};
