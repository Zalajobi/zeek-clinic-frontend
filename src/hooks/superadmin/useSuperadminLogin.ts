import {useState} from "react";
import {axiosPostRequest} from "../../lib/axios";
import toast from 'react-hot-toast';

export const useSuperdminLogin = () => {
  const [email, setEmail] = useState('Johndoe@gmail.com');
  const [password, setPassword] = useState(`********`);
  const [rememberMe, setRememberMe] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async () => {
    const response = await axiosPostRequest('/account/super-admin/auth/login', {
      email,
      password
    })

    setResponseMessage(response?.message as string)

    if (response?.success) {
      toast.success(response?.message);
      localStorage.setItem('token', response.data.token)
    } else {
      toast.error(response?.message)
    }
  }

  return {
    email,
    password,
    rememberMe,
    responseMessage,

    setEmail,
    setPassword,
    setRememberMe,
    handleLogin,
  }
}

export default useSuperdminLogin;