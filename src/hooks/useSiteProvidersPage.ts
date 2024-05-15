import { useState } from 'react';

export const useSiteProvidersPage = () => {
  const [addProviderModal, setAddProviderModal] = useState(false);

  const handleAddProviderModal = () => {
    setAddProviderModal((cur) => !cur);
  };

  return {
    // Values
    addProviderModal,

    // Functions
    handleAddProviderModal,
  };
};
