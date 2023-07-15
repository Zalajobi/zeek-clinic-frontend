import { Fragment } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Chart } from 'react-google-charts';

interface CustomChartProps {
  data: {
    name: string | number;
    value: string | number;
  }[];
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
}

export const CustomPieChart = ({
  data,
  innerRadius = 0,
  outerRadius = 0,
  paddingAngle = 0,
}: CustomChartProps) => {
  const RADIAN = Math.PI / 180;
  const customizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const getLabel = (entry: any) => {
    return entry?.name;
  };

  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const COLORS = [
    '#dc2626',
    '#3dc1c5',
    '#15803d',
    '#15803d',
    '#15803d',
    '#7e22ce',
    '#be185d',
    '#047857',
    '#92400e',
    '#84cc16',
  ];

  return (
    <Fragment>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </Fragment>
  );
};
