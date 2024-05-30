import { useState } from 'react';

export const useSiteAdmins = () => {
  const [addAdminModal, setAddAdminModal] = useState(false);

  // Handle Create admin Modal
  const handleAddAdminModal = () => {
    setAddAdminModal((cur) => !cur);
  };

  return {
    // Values
    addAdminModal,

    // Functions
    handleAddAdminModal,
  };
};
