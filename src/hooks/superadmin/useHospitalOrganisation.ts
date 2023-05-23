import {ChangeEvent, useState} from "react";


export const useHospitalOrganisation = () => {
  const [hospitalTabs, setHospitalTabs] = useState<'All' | 'Pending' | 'Active' | 'Deactivated'>('All');
  const [searchOrganisation, setSearchOrganisation] = useState('');

  const onUpdateSearchOrganisation = (event:ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSearchOrganisation(event.target.value)
  }

  const onUpdateActiveTab = (tab:'All' | 'Pending' | 'Active' | 'Deactivated') => {
    setHospitalTabs(tab)
  }

  return {
    //Value
    searchOrganisation,
    hospitalTabs,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
  }
}