import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const selectTimeframe = ['All', '1 Day(s)', '7 Day(s)', '2 Week(s)', '1 Month'];

export const useProvidersPrimaryPatients = () => {
  const navigate = useNavigate();
  const [openPopoverAction, setOpenPopoverAction] = useState(false);
  const [openMovePatientModal, setOpenMovePatientModal] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    selectTimeframe[2]
  );
  const [patientName, setPatientName] = useState<string>('');
  const [patientId, setPatientId] = useState('');
  const [patientProfilePic, setPatientProfilePic] = useState('');

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

    // Functions
    onUpdatePopoverAction,
    handleOpenMovePatientModal,
    setSelectedTimeframe,
    setOpenMovePatientModal,
  };
};
