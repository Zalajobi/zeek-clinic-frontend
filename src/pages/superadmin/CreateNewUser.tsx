import React, { useCallback } from 'react'
import { Button, Label, Select, TextInput } from "flowbite-react";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import Dropzone from 'react-dropzone'
import { ImUpload } from 'react-icons/im';

import Text from "../../components/global/Text";
import {ToasterConfig} from "../../components/global/Toast";
import {useSuperadminCreateAdminUser} from "../../hooks/superadmin/useSuperadminCreateAdminUser";
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
      <div className={`w-full p-10 md:px-20 flex flex-col`}>
        <Text
          text={`Add Admin`}
          size="4xl"
          weight={800}
          className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
        />

        <div className={`w-full p-5 shadow-2xl rounded-lg flex flex-col`}>
          <div className={`grid-container grid grid-cols-[20%_80%] gap-4`}>
            <ImageUpload bucketFolder={`/profile_image`}/>

            <div className={``}>
              Hi There
            </div>
          </div>
        </div>
      </div>
    </SuperadminBaseTemplate>
  )
}

export default CreateNewUser;