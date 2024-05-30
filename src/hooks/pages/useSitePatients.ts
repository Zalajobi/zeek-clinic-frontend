import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { SearchRequestPayload } from '@typeSpec/index';
import { useSelector } from 'react-redux';

export const useSitePatients = () => {
  const { siteId } = useParams();
  const [addPatientModal, setAddPatientModal] = useState(false);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [searchKey, setSearchKey] = useState('Search By');
  const [searchPatientPayload, setSearchPatientPayload] =
    useState<SearchRequestPayload>({
      siteId,
    });

  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  // Update Create Patient Modal
  const onUpdateAddPatientModal = () => {
    setAddPatientModal((cur) => !cur);
  };

  return {
    // Values
    addPatientModal,

    // Functions
    onUpdateAddPatientModal,
  };
};
