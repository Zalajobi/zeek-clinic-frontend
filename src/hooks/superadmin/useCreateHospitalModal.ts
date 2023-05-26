import {ChangeEvent, useState} from "react";

export const useCreateHospitalModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState('');

  const onUpdateHospitalName = (event:ChangeEvent<HTMLInputElement>) => setName(event.target.value)

  const createNewOrganization = async () => {
    console.log('Create new Organization')
  }


  return {
    // Value
    name,

    // Functions
    onUpdateHospitalName,
    createNewOrganization,
  }
}