import React from 'react'
import useSuperadminCreateUser from "../../hooks/superadmin/useSuperadminCreateUser";
import Text from "../../components/global/Text";
import {Button, Label, TextInput} from "flowbite-react";
import LoginImage from "../../assets/img/admin/login.png";
import {ToasterConfig} from "../../components/global/Toast";
import { useForm } from "react-hook-form";
import { CreateUserInput } from '../../types/superadmin/formTypes';
import * as yup from 'yup'

const CreateNewUser = () => {
  const { register, handleSubmit } = useForm<CreateUserInput>();

  const {
    // Values
    firstName,

    // Functions
    handleCreateAdmin,
  } = useSuperadminCreateUser()

  return (
    <React.Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center justify-center h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-20">
          <form className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37]" onSubmit={handleSubmit(handleCreateAdmin)}>
            <div className="flex flex-col w-full">
              <Text text={`Welcome back`} className={`text-[#111928] dark:text-white mb-4`} size="2xl" weight={700}/>

              <div className="flex flex-row w-full">
                <Text text={`Don't have an account`} weight={500} size={"sm"} className={`text-[#6B7280] dark:text-white mr-2`}/>

                <a className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer" href="/admin/signup">Signup</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="firstName"
                      value="First Name"
                    />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder="John"
                    required={true}
                    helperText={firstName?.length === 0 && <React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
                    {...register("firstName")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="lastName"
                      value="Last Name"
                    />
                  </div>
                  <TextInput
                    id="lastName"
                    placeholder="Doe"
                    required={true}
                    helperText={firstName?.length === 0 && <React.Fragment><span className="font-medium">Alright!</span>{' '}Username available!</React.Fragment>}
                    {...register("lastName")}
                  />
                </div>
              </div>

              <div className="flex flex-row w-full my-4 items-center">
                <div className="w-[45%] h-px bg-[#E5E7EB]"/>

                <Text text={`or`} className={`w-10 text-center text-[#6B7280] dark:text-white`} size={`lg`}/>

                <div className="w-[45%] h-px bg-[#E5E7EB]"/>
              </div>

              {/*<div className={`w-full grid grid-cols-2 gap-4 items-center my-2`}>*/}
              {/*  <CheckBox checked={rememberMe} click={() => setRememberMe(!rememberMe)}/>*/}

              {/*  <div className={`flex justify-end`}>*/}
              {/*    <a className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer" href="/admin/forgot-password">forgot password</a>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <Button type={`submit`} className={`my-4`}>Submit</Button>
            </div>
          </form>

          <div className="w-full flex flex-row justify-center">
            <img src={LoginImage} alt={`Login Page`}/>
          </div>
        </div>
      </div>

      <ToasterConfig/>
    </React.Fragment>
  )
}

export default CreateNewUser;