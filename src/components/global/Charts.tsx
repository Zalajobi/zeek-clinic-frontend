import { materialLineChartConfig, pieChard3dOptions } from '@util/constants';
import { Card, CardHeader, Spinner } from '@material-tailwind/react';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import Chart from 'react-apexcharts';
import { Typography } from '@components/global/dialog/Typography';
import { CustomCard } from '@components/global/card/CustomCard';
import { DropdownMenu } from '@components/global/MenuTabs';
import { Fragment } from 'react';

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
  type: 'line' | 'bar';
  loading: boolean;
  xAxis: string[] | number[];
  yAxis: string[] | number[];
  chartLabel?: string;
  curve?: 'smooth' | 'straight' | 'stepline';
  height?: string;
}

export const LineAndBarChart = ({
  type,
  loading,
  xAxis,
  yAxis,
  chartLabel = '',
  curve = 'smooth',
  height,
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
          show: true,
        },
      },
      title: {
        text: chartLabel,
        align: 'center',
        style: {
          fontSize: '16px',
          color: '#263238',
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ['#020617', '#F44336', '#E91E63', '#9C27B0', '#3975AE'],
      stroke: {
        lineCap: 'round',
        curve: curve,
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
    <Fragment>
      {!loading ? (
        // @ts-ignore
        <Chart
          {...chartConfig}
          type={type}
          height={height}
        />
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}
    </Fragment>
  );
};

interface PieAndDonutChartProps {
  labels: string[] | number[];
  series: string[] | number[];
  loading: boolean;
  type?: 'pie' | 'donut';
  chartLabel?: string;
  height?: string;
}

export const PieAndDonutChart = ({
  labels,
  series,
  loading,
  type = 'pie',
  chartLabel = '',
  height,
}: PieAndDonutChartProps) => {
  const chartConfig = {
    type: type,
    series: series,
    options: {
      pie: {
        expandOnClick: true,
      },
      labels: labels,
      title: {
        text: chartLabel,
        align: 'center',
        style: {
          fontSize: '16px',
          color: '#263238',
        },
      },
      chart: {
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      colors: ['#020617', '#ff8f00', '#00897b', '#1e88e5', '#d81b60'],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        floating: false,
        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
        formatter: function (seriesName: any) {
          return seriesName;
        },
      },
    },
  };

  return (
    <Fragment>
      {!loading ? (
        // @ts-ignore
        <Chart
          {...chartConfig}
          height={height}
        />
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}
    </Fragment>
  );
};
