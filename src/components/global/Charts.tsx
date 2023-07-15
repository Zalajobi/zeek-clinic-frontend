import { Fragment } from 'react';
import { Chart } from 'react-google-charts';

interface CustomChartProps {
  data: any;
  title: string;
  width?: string;
  height?: string;
}

export const PieChart3D = ({
  data,
  title,
  width = '100%',
  height = '400px',
}: CustomChartProps) => {
  const options = {
    title,
    pieHole: 0.4,
    is3D: true,
    legend: {
      position: 'top',
      alignment: 'center',
      maxLines: 10,
      textStyle: {
        fontSize: 10,
        bold: true,
        italic: false,
      },
    },
    titlePosition: 'none',
    titleTextStyle: {
      color: '#000000',
    },
    titleFontSize: 20,
    colors: [
      '#b91c1c',
      '#4d7c0f',
      '#b45309',
      '#0e7490',
      '#a16207',
      '#7e22ce',
      '#374151',
      '#be123c',
      '#4338ca',
      '#ec4899',
    ],
  };

  return (
    <Fragment>
      <Chart
        chartType="PieChart"
        width={width}
        height={height}
        data={data}
        options={options}
      />
    </Fragment>
  );
};
