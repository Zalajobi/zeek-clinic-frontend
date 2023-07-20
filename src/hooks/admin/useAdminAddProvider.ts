import { ChangeEvent, useState } from 'react';

export const useAdminAddProvider = () => {
  const [profilePic, setProfilePic] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);

  const onUpdateFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
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

    // Functions
    setProfilePic,
    onUpdateFirstName,
    onSubmit,
  };
};

export default useAdminAddProvider;
