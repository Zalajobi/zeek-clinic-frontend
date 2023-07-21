import { ChangeEvent, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequest } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { SelectInputFieldProps } from '../../types/common';
import { GetDepartmentsDataResponse } from '../../types/apiResponses';
import { AdminAddProviderInput } from '../../types/superadmin/formTypes';

export const useAdminAddProvider = () => {
  const { siteId } = useParams();
  const departments: SelectInputFieldProps[] = [];

  // State for Input fields
  const [profilePic, setProfilePic] = useState('');
  const [userTitle, setUserTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // Check for input error state management
  const [firstNameError, setFirstNameError] = useState(false);

  // Data From Api Calls

  useEffect(() => {
    const getAddProviderData = async () => {
      const response = await axiosGetRequest(
        `/account/department/get-all/${siteId}`
      );

      if (response.success) {
        const data = response.data as GetDepartmentsDataResponse[];

        for (const item of data) {
          departments.push({
            value: item?.id,
            placeholder: item?.name,
          });
        }
      }
    };

    getAddProviderData().catch((err) => {
      console.log(err);
    });
  }, [input]);

  const onUpdateTitle = (event: ChangeEvent<HTMLSelectElement>) =>
    setUserTitle(event.target.value);

  const onUpdateFirstName = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);

  const onUpdateLastName = (event: ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value);

  const onUpdateMiddleName = (event: ChangeEvent<HTMLInputElement>) =>
    setMiddleName(event.target.value);

  const onUpdateGender = (event: ChangeEvent<HTMLSelectElement>) =>
    setGender(event.target.value);

  const onUpdateDateOfBirth = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('HELLO WORLD');
    console.log(event);
  };

  const hello = 'HI';

  const onSubmit = async (data: AdminAddProviderInput) => {
    console.log(data);
    if (firstName.length <= 3) setFirstNameError(true);

    const newProviderData = {
      title: userTitle,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      gender,
    };

    console.log(newProviderData);
  };

  return {
    // Values
    hello,
    profilePic,
    firstName,
    firstNameError,
    departments,
    lastName,
    middleName,
    userTitle,
    gender,
    dateOfBirth,

    // Functions
    setProfilePic,
    onUpdateFirstName,
    onSubmit,
    onUpdateTitle,
    onUpdateLastName,
    onUpdateMiddleName,
    onUpdateGender,
    onUpdateDateOfBirth,
  };
};

export default useAdminAddProvider;
