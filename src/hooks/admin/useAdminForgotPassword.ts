import { useState } from 'react';
import { axiosPostRequestUserService } from '../../lib/axios';
import toast from 'react-hot-toast';

export const useAdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const resetPassword = async () => {
    const response = await axiosPostRequestUserService(
      '/admin/password/reset-request',
      {
        email,
      }
    );

    setResponseMessage(response?.message as string);

    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message);
    }
  };

  return {
    email,
    responseMessage,

    setEmail,
    resetPassword,
  };
};
