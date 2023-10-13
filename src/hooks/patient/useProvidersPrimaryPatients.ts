import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  UserServiceDepartmentResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';
import { convertObjectToGlobalSelectInputProps } from '@util/index';

const selectTimeframe = ['All', '1 Day(s)', '7 Day(s)', '2 Week(s)', '1 Month'];

export const useProvidersPrimaryPatients = (
  departments: UserServiceDepartmentResponseData[],
  serviceAreas: UserServiceServiceAreaResponseData[],
  units: UserServiceUnitResponseData[]
) => {
  const navigate = useNavigate();
  const [openPopoverAction, setOpenPopoverAction] = useState(false);
  const [openMovePatientModal, setOpenMovePatientModal] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    selectTimeframe[2]
  );
  const [patientName, setPatientName] = useState<string>('');
  const [patientId, setPatientId] = useState('');
  const [patientProfilePic, setPatientProfilePic] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [serviceAreaId, setServiceAreaId] = useState('');
  const [unitId, setUnitId] = useState('');
  const [departmentsSelectField, setDepartmentsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [serviceAreasSelectField, setServiceAreasSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [unitsSelectField, setUnitsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);

  useEffect(() => {
    setDepartmentsSelectField(
      convertObjectToGlobalSelectInputProps(departments, 'id', 'name')
    );
    setServiceAreasSelectField(
      convertObjectToGlobalSelectInputProps(serviceAreas, 'id', 'name')
    );
    setUnitsSelectField(
      convertObjectToGlobalSelectInputProps(units, 'id', 'name')
    );
  }, [departments, serviceAreas, units]);

  const onUpdatePopoverAction = () => setOpenPopoverAction(!openPopoverAction);
  const handleOpenMovePatientModal = (
    id: string,
    title: string,
    firstName: string,
    middleName: string,
    lastName: string,
    profilePic: string
  ) => {
    setPatientName(`${title} ${firstName} ${middleName} ${lastName}`);
    setPatientId(id);
    setPatientProfilePic(profilePic);
    setOpenMovePatientModal(!openMovePatientModal);
  };

  const movePatient = () => {
    console.log({
      departmentId,
      serviceAreaId,
      unitId,
    });
  };

  return {
    // Values
    navigate,
    openPopoverAction,
    openMovePatientModal,
    selectTimeframe,
    selectedTimeframe,
    patientName,
    patientId,
    patientProfilePic,
    departmentsSelectField,
    serviceAreasSelectField,
    unitsSelectField,

    // Functions
    onUpdatePopoverAction,
    handleOpenMovePatientModal,
    setSelectedTimeframe,
    setOpenMovePatientModal,
    setDepartmentId,
    setServiceAreaId,
    setUnitId,
    movePatient,
  };
};
