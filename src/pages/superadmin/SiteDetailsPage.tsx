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
import { PatientChart, DistributionChart } from '@components/SiteAnalytics';

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
    providerDistributionChartData,
    providerDistributionChartLoading,
    providerSiteDistributionValue,
    providerSiteDistributionData,

    // Functions
    onUpdateChart,
    onUpdateSiteDistributionChart,
    onUpdateProviderSiteDistributionChart,
  } = useSiteDetails();

  // Patient Graph Data
  const [patientChartXAxis, patientChartYAxis] = processCountAndChartData(
    patientChartData?.data as CountDataPayload[],
    tabValue
  );

  // Patient Distribution Chart Data
  const [distributionLabel, distributionCount] = processCountAndChartData(
    patientDistributionChartData?.data as CountDataPayload[]
  );

  // Provider Distribution Chart Data
  const [providerDistributionLabel, providerDistributionCount] =
    processCountAndChartData(
      providerDistributionChartData?.data as CountDataPayload[]
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
            label="New Patient(s)"
            updateChartTimeline={onUpdateChart}
            timeLine={tabValue}
            type="line"
            loading={patientChartLoading}
            xAxis={patientChartXAxis}
            yAxis={patientChartYAxis}
            className={`col-span-2 min-h-[470px]`}
          />

          {/*Patient Distribution Chart*/}
          <DistributionChart
            distribution={siteDistributionValue}
            distributionData={siteDistributionData}
            loading={patientDistributionChartLoading}
            labels={distributionLabel}
            series={distributionCount}
            className={`col-span-2 min-h-[470px]`}
            updateDistribution={onUpdateSiteDistributionChart}
            title={'Patient Distribution'}
          />

          {/*Provider Distribution Chart*/}
          <DistributionChart
            distribution={providerSiteDistributionValue}
            distributionData={providerSiteDistributionData}
            loading={providerDistributionChartLoading}
            labels={providerDistributionLabel}
            series={providerDistributionCount}
            className={`col-span-2 min-h-[470px]`}
            updateDistribution={onUpdateProviderSiteDistributionChart}
            title={'Provider Distribution'}
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
