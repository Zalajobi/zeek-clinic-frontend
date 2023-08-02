import { Fragment } from 'react';
import Text from '../../../components/global/Text';
import TextInputLabel from '../../../components/global/formInput/TextInputLabel';
import { Button } from 'flowbite-react';
import CheckBox from '../../../components/global/formInput/CheckBox';
import LoginImage from '../../../assets/img/admin/login.png';
import { ToasterConfig } from '../../../components/global/Toast';
import useSuperadminLogin from '../../../hooks/superadmin/useSuperadminLogin';

const SuperadminLogin = () => {
  const { setEmail, setPassword, handleLogin, rememberMe, setRememberMe } =
    useSuperadminLogin();

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

export default SuperadminLogin;
