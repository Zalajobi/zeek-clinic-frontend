import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  matchLowerCaseRegex,
  matchNumbersRegex,
  matchUpperCaseRegex,
} from '@lib/constants/constants';
import {
  axiosGetRequestUserService,
  axiosPutRequestUserService,
} from '@lib/axios';

export const useAdminChangePassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    setAuthToken(searchParams.get('token') as string);

    verifyToken(searchParams.get('token') as string).then(() => {});
  }, []);

  const verifyToken = async (token: string) => {
    const response = await axiosGetRequestUserService(
      `/admin/jwt_token/verify?token=${token}`
    );

    if (!response.success) {
      toast.error(response.message);
      navigate('/admin/login');
    }
  };

  const onUpdateNewPassword = (value: string) => setNewPassword(value);

  const onUpdateVerifyPassword = (value: string) => setVerifyPassword(value);

  const handlePasswordSubmit = async () => {
    if (!newPassword) {
      toast.error('Password must not be empty');
      return;
    }

    if (newPassword !== verifyPassword) {
      toast.error('Password does not match');
      return;
    }
    if (!newPassword.match(matchLowerCaseRegex)) {
      toast.error('Password should contain uppercase letter(s)!');
      return;
    }

    if (!newPassword.match(matchUpperCaseRegex)) {
      toast.error('Password should contain uppercase letter(s)!');
      return;
    }
    if (!newPassword.match(matchNumbersRegex)) {
      toast.error('Password should contain numbers(s)!');
      return;
    }
    if (newPassword.length < 10 || verifyPassword.length < 10) {
      toast.error('Password length should be more than 10.');
      return;
    }

    const response = await axiosPutRequestUserService('/admin/reset_password', {
      password: newPassword,
      token: authToken,
    });

    if (response.success) {
      toast.success(response.message);
      navigate('/admin/login');
    }
  };

  return {
    authToken,

    onUpdateNewPassword,
    onUpdateVerifyPassword,
    handlePasswordSubmit,
  };
};
