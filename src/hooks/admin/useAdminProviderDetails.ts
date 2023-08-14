import { useParams } from 'react-router-dom';

export const useAdminProviderDetails = () => {
  const { id } = useParams();

  return {
    id,
  };
};
