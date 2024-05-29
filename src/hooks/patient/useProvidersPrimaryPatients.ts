import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectInputFieldProps } from '@typeSpec/common';
import { UserServiceUnitResponseData } from '@typeSpec/index';
import { convertObjectToGlobalSelectInputProps } from '@util/index';
import { useMutation, useQueryClient } from 'react-query';
import { axiosPutRequestUserService } from '@lib/axios';
import toast from 'react-hot-toast';
import { DepartmentPayload, ServiceAreaPayload } from '@typeSpec/payloads';

const selectTimeframe = ['All', '1 Day(s)', '7 Day(s)', '2 Week(s)', '1 Month'];

export const useProvidersPrimaryPatients = (
  departments: DepartmentPayload[],
  serviceAreas: ServiceAreaPayload[],
  units: UserServiceUnitResponseData[]
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
  const [movePatientLoading, setMovePatientLoading] = useState(false);
  const [departmentsSelectField, setDepartmentsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [serviceAreasSelectField, setServiceAreasSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [unitsSelectField, setUnitsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);

  const movePatientMutate = useMutation({
    mutationFn: (data: any) => {
      return axiosPutRequestUserService(`/patients/update/${patientId}`, data);
    },

    onError: () => {
      toast.error(`Unable To Move ${patientName}`);
      setMovePatientLoading(!movePatientLoading);
    },

    onSuccess: (result) => {
      if (result?.success) toast.success(result?.message);
      else toast.error('Something Went Wrong');

      setMovePatientLoading(!movePatientLoading);
      queryClient.resetQueries('providerPrimaryPatients').then(() => {});
    },

    onMutate: () => {
      setMovePatientLoading(!movePatientLoading);
    },
  });

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
    setOpenMovePatientModal(!openMovePatientModal);
    const data = {
      departmentId,
      serviceareaId: serviceAreaId,
      unitId,
    };

    movePatientMutate.mutate(data);
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
    movePatientLoading,

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
