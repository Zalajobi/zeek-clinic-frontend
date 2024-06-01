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
import { processCountAndChartData } from '@util/index';
import { CountDataPayload } from '@typeSpec/payloads';
import {
  PatientChart,
  PatientDistributionChart,
} from '@components/SiteAnalytics';

const SiteDetailsPage = () => {
  const {
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
  } = useSiteDetails();

  const [patientChartXAxis, patientChartYAxis] = processCountAndChartData(
    patientChartData?.data as CountDataPayload[],
    tabValue
  );

  const [distributionLabel, distributionCount] = processCountAndChartData(
    patientDistributionChartData?.data as CountDataPayload[]
  );

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

        <div className="flex flex-col gap-6 my-6 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <PatientChart
            menuData={tabData}
            label="Patient(s)"
            updateChartTimeline={onUpdateChart}
            timeLine={tabValue}
            type="line"
            loading={patientChartLoading}
            xAxis={patientChartXAxis}
            yAxis={patientChartYAxis}
            className={`col-span-2`}
          />

          <PatientDistributionChart
            distribution={siteDistributionValue}
            distributionData={siteDistributionData}
            loading={patientDistributionChartLoading}
            labels={distributionLabel}
            series={distributionCount}
            className={`col-span-2`}
            updateDistribution={onUpdateSiteDistributionChart}
            title={'Patient Distribution'}
          />

          <LatestDepartments className={`col-span-2`} />

          <LatestUnit className={`col-span-2`} />

          <LatestServiceArea className={`col-span-2`} />

          <LatestRole className={`col-span-2`} />
        </div>
      </div>
    </SuperadminBaseTemplate>
  );
};

export default SiteDetailsPage;
