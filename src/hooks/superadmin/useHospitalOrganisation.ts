import {ChangeEvent, useState} from "react";


export const useHospitalOrganisation = () => {
  const [hospitalTabs, setHospitalTabs] = useState<'All' | 'Pending' | 'Active' | 'Deactivated'>('All');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [searchOrganisation, setSearchOrganisation] = useState('');
  const [showPerPage, setShowPerPage] = useState(false);

  const onUpdateSearchOrganisation = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSearchOrganisation(event.target.value)
  }

  const onUpdateActiveTab = (tab:'All' | 'Pending' | 'Active' | 'Deactivated') => {
    setHospitalTabs(tab)
  }

  const onUpdatePerPageItem = (value: 'All' | 10 | 20 | 50 | 100) => {
    console.log(value)
    setPerPage(value)
    setShowPerPage(!showPerPage)
  }

  return {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    showPerPage,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
  }
}