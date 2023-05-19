import React from 'react'
import Text from "../../components/global/Text";
import {useSuperadminCreateAdminUser} from "../../hooks/superadmin/useSuperadminCreateAdminUser";
import {Button, Label, Select, TextInput} from "flowbite-react";
import {ToasterConfig} from "../../components/global/Toast";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import {AllCountries, AllStatesAndCities, CreateUserInput, CreateUserInputSchema} from '../../types/superadmin/formTypes';
import ImageUpload from "../../components/global/input/ImageUpload";
import SuperadminBaseTemplate from "../../components/templates/superadmin/SuperadminBaseTemplate";

const CreateNewUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserInput>({
    resolver: yupResolver(CreateUserInputSchema)
  });

  const {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
  } = useSuperadminCreateAdminUser()

  return (
    <SuperadminBaseTemplate>
      <h1>Welcome to Zeek Clinic - Create Admin</h1>
    </SuperadminBaseTemplate>
  )
}

export default CreateNewUser;