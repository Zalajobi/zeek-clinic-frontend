import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment, SetStateAction, useMemo } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import { CustomDropDownMenuSelect } from '@components/global/formInput/CustomInput';
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
import { MovePatientActionModal } from '@components/patient/modals/quickAction/SingleActionModals';
import { useProvidersPrimaryPatients } from '@hooks/patient/useProvidersPrimaryPatients';

interface ProvidersPrimaryPatientProps {
  data: UserServicePatientDetailsResponse[];
  loading: boolean;
  className?: string;
  department?: UserServiceDepartmentResponseData[];
  serviceArea?: UserServiceServiceAreaResponseData[];
  unit?: UserServiceUnitResponseData[];
}

const ProvidersPrimaryPatients = ({
  data,
  loading,
  className = '',
  department,
  serviceArea,
  unit,
}: ProvidersPrimaryPatientProps) => {
  const {
    // Values
    navigate,
    // openPopoverAction,
    openMovePatientModal,
    selectTimeframe,
    selectedTimeframe,
    patientName,
    patientProfilePic,
    departmentsSelectField,
    serviceAreasSelectField,
    unitsSelectField,

    // Functions
    // onUpdatePopoverAction,
    handleOpenMovePatientModal,
    setSelectedTimeframe,
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
    [data]
  );

  return (
    <Fragment>
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

          <CustomDropDownMenuSelect
            items={selectTimeframe}
            value={selectedTimeframe}
            onSelect={(value: SetStateAction<string | number>) =>
              setSelectedTimeframe(value as string)
            }
          />
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
