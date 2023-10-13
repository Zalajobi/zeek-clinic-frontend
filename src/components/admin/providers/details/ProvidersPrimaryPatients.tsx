import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment, SetStateAction, useMemo, useState } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import { CustomDropDownMenuSelect } from '@components/global/formInput/CustomInput';
import { UserServicePatientDetailsResponse } from '@typeSpec/index';
import {
  ProviderPrimaryPatientColumnData,
  ProviderPrimaryPatientRowData,
} from '@components/tables/row-col-mapping/patient/ProviderPrimaryPatientTable';
import Table from '@components/global/table/Table';
import { useNavigate } from 'react-router-dom';
import { MovePatientActionModal } from '@components/patient/modals/quickAction/SingleActionModals';
import { useProvidersPrimaryPatients } from '@hooks/patient/useProvidersPrimaryPatients';

interface ProvidersPrimaryPatientProps {
  data: UserServicePatientDetailsResponse[];
  loading: boolean;
  className?: string;
}

const ProvidersPrimaryPatients = ({
  data,
  loading,
  className = '',
}: ProvidersPrimaryPatientProps) => {
  const {
    // Values
    navigate,
    // openPopoverAction,
    openMovePatientModal,
    selectTimeframe,
    selectedTimeframe,
    patientName,
    patientId,
    patientProfilePic,

    // Functions
    // onUpdatePopoverAction,
    handleOpenMovePatientModal,
    setSelectedTimeframe,
    setOpenMovePatientModal,
  } = useProvidersPrimaryPatients();

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
        className={`w-full !bg-[#fff] flex overflow-scroll flex-col h-[450px] ${className}`}>
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
      />
    </Fragment>
  );
};

export default ProvidersPrimaryPatients;
