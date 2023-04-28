import {useState} from "react";
import {axiosPostRequestNoAuth} from "../../lib/axios";
import toast from 'react-hot-toast';

export const useAdminLogin = () => {
  const [email, setEmail] = useState('Johndoe@gmail.com');
  const [password, setPassword] = useState(`********`);
  const [rememberMe, setRememberMe] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = async () => {
    const response = await axiosPostRequestNoAuth('/account/admin/login', {
      email,
      password
    })

    setResponseMessage(response?.message as string)

    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message)
    }

    console.log(response)
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

export default useAdminLogin;