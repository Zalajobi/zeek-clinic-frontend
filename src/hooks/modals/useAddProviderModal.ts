import { useState } from 'react';

export const useAddProviderModal = (handler: () => void) => {
  const [logo, setLogo] = useState('');

  return {
    // Values
    logo,
  };
};
