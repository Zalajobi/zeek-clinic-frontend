import { CustomCard } from '@components/global/card/CustomCard';
import { Typography } from '@components/global/dialog/Typography';
import { DropdownMenu } from '@components/global/MenuTabs';
import { LineAndBarChart, PieAndDonutChart } from '@components/global/Charts';

interface PatientChartProps {
  menuData: any[];
  label: string;
  updateChartTimeline: (value: any) => void;
  timeLine: string;
  type: 'line' | 'bar';
  loading: boolean;
  xAxis: string[] | number[];
  yAxis: string[] | number[];
  chartLabel?: string;
  className?: string;
  curve?: 'smooth' | 'straight' | 'stepline';
}

export const PatientChart = ({
  menuData,
  label,
  updateChartTimeline,
  timeLine,
  type,
  loading,
  xAxis,
  yAxis,
  chartLabel,
  className = '',
  curve = 'smooth',
}: PatientChartProps) => {
  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
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

      <div className="w-full h-full">
        <LineAndBarChart
          chartLabel={chartLabel}
          loading={loading}
          type={type}
          xAxis={xAxis}
          yAxis={yAxis}
          curve={curve}
          height={'380'}
        />
      </div>
    </CustomCard>
  );
};

interface PatientDistributionChartProps {
  labels: string[] | number[];
  series: string[] | number[];
  loading: boolean;
  title: string;
  updateDistribution: (value: any) => void;
  distribution: string;
  distributionData: string[];
  className?: string;
  type?: 'pie' | 'donut';
}

export const PatientDistributionChart = ({
  labels,
  series,
  loading,
  title,
  updateDistribution,
  distribution,
  distributionData,
  className,
  type = 'pie',
}: PatientDistributionChartProps) => {
  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
      <div
        className={`grid grid-cols-2 gap-4 w-full my-4 h-10 'md:grid-cols-2`}>
        <Typography
          Tag={'h4'}
          text={title}
          className="text-left mr-auto"
        />

        <DropdownMenu
          value={distribution}
          menuItems={distributionData}
          change={updateDistribution}
          buttonClass={`border-gray-100 h-[42px]`}
        />
      </div>

      <div className="w-full h-full">
        <PieAndDonutChart
          series={series}
          labels={labels}
          loading={loading}
          type={type}
        />
      </div>
    </CustomCard>
  );
};
