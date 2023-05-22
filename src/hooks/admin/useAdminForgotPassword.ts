import {useState} from "react";
import {axiosPostRequest} from "../../lib/axios";
import toast from "react-hot-toast";

export const useAdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const resetPassword = async () => {
    const response = await axiosPostRequest('/account/admin/password/reset-request', {
      email,
    }, localStorage.getItem('token') as string)

    setResponseMessage(response?.message as string)

    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message)
    }
  }

  return {
    email,
    responseMessage,

    setEmail,
    resetPassword,
  }
}