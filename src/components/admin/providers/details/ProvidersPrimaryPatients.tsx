import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment, useMemo } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import {
  UserServiceDepartmentResponseData,
  UserServicePatientDetailsResponse,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';
import {
  ProviderPrimaryPatientColumnData,
  ProviderPrimaryPatientRowData,
} from '@components/tables/row-col-mapping/patient/ProviderPrimaryPatientTable';
import Table from '@components/global/table/Table';
import { MovePatientActionModal } from '@components/modals/quickAction/MovePatientActionModal';
import { useProvidersPrimaryPatients } from '@hooks/patient/useProvidersPrimaryPatients';
import { Button } from '@material-tailwind/react';
import { LoadingSpinner } from '@components/global/Toast';

interface ProvidersPrimaryPatientProps {
  data: UserServicePatientDetailsResponse[];
  loading: boolean;
  siteId: string;
  className?: string;
  department?: UserServiceDepartmentResponseData[];
  serviceArea?: UserServiceServiceAreaResponseData[];
  unit?: UserServiceUnitResponseData[];
}

const ProvidersPrimaryPatients = ({
  data,
  loading,
  siteId,
  className = '',
  department,
  serviceArea,
  unit,
}: ProvidersPrimaryPatientProps) => {
  const {
    // Values
    navigate,
    openMovePatientModal,
    patientName,
    patientProfilePic,
    departmentsSelectField,
    serviceAreasSelectField,
    unitsSelectField,
    movePatientLoading,

    // Functions
    handleOpenMovePatientModal,
    setOpenMovePatientModal,
    setDepartmentId,
    setServiceAreaId,
    setUnitId,
    movePatient,
  } = useProvidersPrimaryPatients(
    department ?? [],
    serviceArea ?? [],
    unit ?? []
  );

  const tableCol = useMemo(() => ProviderPrimaryPatientColumnData(), []);

  const tableRow = useMemo(
    () =>
      ProviderPrimaryPatientRowData(
        data,
        loading,
        navigate,
        handleOpenMovePatientModal
      ),
    [data, loading, navigate, handleOpenMovePatientModal]
  );

  return (
    <Fragment>
      <LoadingSpinner
        message={`Moving ${patientName}...`}
        loading={movePatientLoading}
      />

      <CustomCard
        className={`w-full !bg-[#fff] flex overflow-scroll flex-col h-[600px] ${className}`}>
        <div className={`flex items-center justify-center`}>
          <Typography
            text={`Primary Patients`}
            Tag={`p`}
            weight={700}
            size={`xl`}
            className={`mr-auto`}
          />

          <Button
            size={`sm`}
            onClick={() => navigate(`/admin/patients/${siteId}`)}
            variant={`text`}>
            View
          </Button>
        </div>

        <div className={`flex items-center justify-center mt-5`}>
          <Table
            columns={tableCol}
            data={tableRow}
          />
        </div>
      </CustomCard>

      <MovePatientActionModal
        handler={() => setOpenMovePatientModal(!openMovePatientModal)}
        open={openMovePatientModal}
        name={patientName}
        profile_pic={patientProfilePic}
        departments={departmentsSelectField ?? []}
        serviceAreas={serviceAreasSelectField ?? []}
        units={unitsSelectField ?? []}
        onUpdateDepartment={setDepartmentId}
        onUpdateServiceArea={setServiceAreaId}
        onUpdateUnit={setUnitId}
        onSubmit={movePatient}
      />
    </Fragment>
  );
};

export default ProvidersPrimaryPatients;
