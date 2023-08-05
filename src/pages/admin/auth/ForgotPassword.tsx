import { Fragment } from 'react';
import Text from '../../../components/global/dialog/Text';
import { useAdminForgotPassword } from '../../../hooks/admin/useAdminForgotPassword';
import TextInputLabel from '../../../components/global/formInput/TextInputLabel';
import { Button } from 'flowbite-react';
import { ToasterConfig } from '../../../components/global/Toast';

const ForgotPassword = () => {
  const { setEmail, resetPassword } = useAdminForgotPassword();

  return (
    <Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-md flex flex-col items-center justify-center h-full w-full p-20">
          <div className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37]">
            <div className="flex flex-col w-full">
              <Text
                text={`Forgot Password`}
                className={`text-[#111928] dark:text-white mb-4`}
                size="2xl"
                weight={700}
              />

              <div className="flex flex-row w-full">
                <Text
                  text={`Already have an account`}
                  weight={500}
                  size={'sm'}
                  className={`text-[#6B7280] dark:text-white mr-2`}
                />

                <a
                  className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer"
                  href="/admin/login">
                  Signin
                </a>
              </div>

              <TextInputLabel
                forItem={`email`}
                labelText={`Email`}
                type={`email`}
                id={`email`}
                handleChange={(e) => setEmail(e?.target?.value)}
                required={true}
                inputPlaceholder={`JohnDoe@gmail.com`}
                inputClassName={`mt-2`}
              />

              <Button
                onClick={resetPassword}
                className={`my-4`}>
                Reset Password
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ToasterConfig />
    </Fragment>
  );
};

export default ForgotPassword;
