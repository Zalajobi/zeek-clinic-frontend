import { Fragment } from 'react';
import Text from '../../../components/global/Text';
import TextInputLabel from '../../../components/global/formInput/TextInputLabel';
import useAdminLogin from '../../../hooks/admin/useAdminLogin';
import { Button } from 'flowbite-react';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';
import CheckBox from '../../../components/global/formInput/CheckBox';
import LoginImage from '../../../assets/img/admin/login.png';
import { ToasterConfig } from '../../../components/global/Toast';

const AdminLogin = () => {
  const { setEmail, setPassword, handleLogin, rememberMe, setRememberMe } =
    useAdminLogin();

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center justify-center h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
          <div className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37]">
            <div className="flex flex-col w-full">
              <Text
                text={`Welcome back`}
                className={`text-[#111928] dark:text-white mb-4`}
                size="2xl"
                weight={700}
              />

              <div className="flex flex-row w-full">
                <Text
                  text={`Don't have an account`}
                  weight={500}
                  size={'sm'}
                  className={`text-[#6B7280] dark:text-white mr-2`}
                />

                <a
                  className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer"
                  href="/admin/signup">
                  Signup
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 my-3">
                <TextInputLabel
                  forItem={`email`}
                  labelText={`Email`}
                  type={`email`}
                  id={`email`}
                  handleChange={(e) => setEmail(e?.target?.value)}
                  required={true}
                  inputPlaceholder={`JohnDoe@gmail.com`}
                />

                <TextInputLabel
                  forItem={`password`}
                  labelText={`Password`}
                  type={`password`}
                  id={`password`}
                  handleChange={(e) => setPassword(e?.target?.value)}
                  required={true}
                  inputPlaceholder={`********`}
                />
              </div>

              <div className="flex flex-row w-full my-4 items-center">
                <div className="w-[45%] h-px bg-[#E5E7EB]" />

                <Text
                  text={`or`}
                  className={`w-10 text-center text-[#6B7280] dark:text-white`}
                  size={`lg`}
                />

                <div className="w-[45%] h-px bg-[#E5E7EB]" />
              </div>

              <Button
                onClick={() => console.log('Signin with Google')}
                outline={true}
                color={`gray`}
                className={'text-[#111928] font-medium dark:text-white my-3'}>
                <FcGoogle
                  size={20}
                  className={`mr-2`}
                />
                Sign up with Google
              </Button>

              <Button
                onClick={() => console.log('Signin with Github')}
                outline={true}
                color={`gray`}
                className={'text-[#111928] font-medium dark:text-white my-3'}>
                <GrGithub
                  size={20}
                  className={`mr-2`}
                />
                Sign up with Github
              </Button>

              <div
                className={`w-full grid grid-cols-2 gap-4 items-center my-2`}>
                <CheckBox
                  checked={rememberMe}
                  click={() => setRememberMe(!rememberMe)}
                />

                <div className={`flex justify-end`}>
                  <a
                    className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer"
                    href="/admin/forgot-password">
                    forgot password
                  </a>
                </div>
              </div>

              <Button
                onClick={handleLogin}
                className={`my-4`}>
                Submit
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-row justify-center">
            <img
              src={LoginImage}
              alt={`Login Page`}
            />
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default AdminLogin;
