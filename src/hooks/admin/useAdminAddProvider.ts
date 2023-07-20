import { ChangeEvent, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequest } from '../../lib/axios';

export const useAdminAddProvider = () => {
  useEffect(() => {
    const getAddProviderData = async () => {
      const response = await axiosGetRequest(
        '/account/department/get-all/2e696809-80f2-43f0-94c8-e3925aec15b4'
      );
      console.log(response);

      if (response.success) {
        console.log(response);
      }
    };

    getAddProviderData().catch((err) => {
      console.log(err);
    });
  }, [input]);

  const titleList = [
    'Mr.',
    'Mrs.',
    'Miss.',
    'Dr.',
    'Rn.',
    'Lpn.',
    'Pa.',
    'Np.',
    'Ot.',
    'Pt.',
    'Slp.',
    'Sw.',
  ];
  // State for Input fields
  const [profilePic, setProfilePic] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userTitle, setUserTitle] = useState('');

  // Check for input error state management
  const [firstNameError, setFirstNameError] = useState(false);

  const onUpdateFirstName = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value);

  const onUpdateTitle = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const hello = 'HI';

  const onSubmit = async () => {
    if (firstName.length <= 3) setFirstNameError(true);
  };

  return {
    // Values
    hello,
    profilePic,
    firstName,
    firstNameError,
    userTitle,
    titleList,

    // Functions
    setProfilePic,
    onUpdateFirstName,
    onSubmit,
    onUpdateTitle,
  };
};

export default useAdminAddProvider;
