import React from 'react'
import {useAdminChangePassword} from "../../../hooks/admin/useAdminChangePassword";
import Text from "../../../components/global/Text";
import TextInputLabel from "../../../components/global/input/TextInputLabel";
import {Button} from "flowbite-react";
import {ToasterConfig} from "../../../components/global/Toast";

const ChangePassword = () => {
  const {
    onUpdateNewPassword,
    onUpdateVerifyPassword,
    handlePasswordSubmit,
  } = useAdminChangePassword()

  return (
    <React.Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-md flex flex-col items-center justify-center h-full w-full p-20">
          <div className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37]">
            <div className="flex flex-col w-full">
              <Text text={`Forgot Password`} className={`text-[#111928] dark:text-white mb-4`} size="2xl" weight={700}/>

              <div className="flex flex-row w-full">
                <Text text={`Already have an account`} weight={500} size={"sm"} className={`text-[#6B7280] dark:text-white mr-2`}/>

                <a className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer" href="/admin/login">Signin</a>
              </div>

              <TextInputLabel
                forItem={`newPassword`}
                labelText={`Enter Password`}
                type={`password`}
                id={`newPassword`}
                handleChange={(e) => onUpdateNewPassword(e?.target?.value)}
                required={true}
                inputPlaceholder={`********`}
                inputClassName={`mt-2`}
              />

              <TextInputLabel
                forItem={`verifyPassword`}
                labelText={`Verify Password`}
                type={`password`}
                id={`verifyPassword`}
                handleChange={(e) => onUpdateVerifyPassword(e?.target?.value)}
                required={true}
                inputPlaceholder={`********`}
                inputClassName={`mt-2`}
              />

              <Button onClick={handlePasswordSubmit} className={`my-4`}>Change Password</Button>
            </div>
          </div>
        </div>
      </div>

      <ToasterConfig/>
    </React.Fragment>
  )
}

export default ChangePassword