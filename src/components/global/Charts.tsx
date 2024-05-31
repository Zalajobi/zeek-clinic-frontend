import { materialLineChartConfig, pieChard3dOptions } from '@util/constants';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import Chart from 'react-apexcharts';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
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

interface ActivityLineChartProps {
  menuData: any[];
  label: string;
  updateChartTimeline: (value: any) => void;
  timeLine: string;
  type:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap';
}

export const ActivityLineChart = ({
  menuData,
  label,
  updateChartTimeline,
  timeLine,
  type,
}: ActivityLineChartProps) => {
  return (
    <CustomCard className="flex flex-col items-baseline justify-start w-full min-h-[400px]">
      <div className="grid grid-cols-2 gap-4 w-full my-4 h-10">
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

      <div className="w-full">
        {/*// @ts-ignore*/}
        <Chart
          {...materialLineChartConfig}
          type={type}
          height="300"
        />
      </div>
    </CustomCard>
  );
};

export const LineChart = () => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center">
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <HiSquare3Stack3D className="h-6 w-6" />
        </div>
        <div>
          {/*<Typography variant="h6" color="blue-gray">*/}
          {/*  Line Chart*/}
          {/*</Typography>*/}
          {/*<Typography*/}
          {/*  variant="small"*/}
          {/*  color="gray"*/}
          {/*  className="max-w-sm font-normal"*/}
          {/*>*/}
          {/*  Visualize your data in a simple way using the*/}
          {/*  @material-tailwind/react chart plugin.*/}
          {/*</Typography>*/}
        </div>
      </CardHeader>
      {/*// @ts-ignore*/}
      <Chart {...materialLineChartConfig} />
    </Card>
  );
};
