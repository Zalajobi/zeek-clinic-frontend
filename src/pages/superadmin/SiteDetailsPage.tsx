import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import {
  LatestDepartments,
  LatestUnit,
  LatestServiceArea,
  LatestRole,
} from '@components/LatestUpdatesSiteDashboard';
import { useSiteDetails } from '@hooks/pages/useSiteDetails';
import { LineAndBarChart } from '@components/global/Charts';
import { processChartData } from '@util/index';
import { ChartDataPayload } from '@typeSpec/payloads';

const SiteDetailsPage = () => {
  const {
    siteId,
    patientChartData,
    patientChartLoading,
    tabData,
    tabValue,

    // Functions
    onUpdateChart,
  } = useSiteDetails();

  const [xAxis, yAxis] = processChartData(
    patientChartData?.data as ChartDataPayload[],
    tabValue
  );

  // console.log({
  //   xAxis,
  //   yAxis
  // })

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <Typography
          text={`Welcome`}
          size="4xl"
          weight={800}
          className="mb-4"
          Tag={'h1'}
        />

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />

        <div className="flex flex-col gap-6 my-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          <LineAndBarChart
            menuData={tabData}
            label="Patient(s)"
            updateChartTimeline={onUpdateChart}
            timeLine={tabValue}
            type="line"
            loading={patientChartLoading}
            xAxis={xAxis}
            yAxis={yAxis}
            chartLabel="Patient"
          />

          <LatestDepartments />

          <LatestUnit />

          <LatestServiceArea />

          <LatestRole />
        </div>
      </div>
    </SuperadminBaseTemplate>
  );
};

export default SiteDetailsPage;
