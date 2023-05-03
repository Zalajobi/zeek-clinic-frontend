import React from 'react'
import useSuperadminCreateUser from "../../hooks/superadmin/useSuperadminCreateUser";
import Text from "../../components/global/Text";
import {Button, Label, Select, TextInput} from "flowbite-react";
import LoginImage from "../../assets/img/admin/login.png";
import {ToasterConfig} from "../../components/global/Toast";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import {AllCountries, AllStatesAndCities, CreateUserInput, CreateUserInputSchema} from '../../types/superadmin/formTypes';

const CreateNewUser = () => {
  // const { register, handleSubmit } = useForm<CreateUserInput>();
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserInput>({
    resolver: yupResolver(CreateUserInputSchema)
  });

  const {
    // Values
    allCountries,
    phoneNumber,
    phoneCode,
    allCountryStates,
    allStateCities,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    onUpdatePhoneNumber,
    onUpdateState,
    onUpdateCity,
  } = useSuperadminCreateUser()

  // console.log(watch("country"))

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
                      color={errors.firstName?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder="John"
                    required={false}
                    color={errors.firstName?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.firstName?.message}</span></React.Fragment>}
                    {...register("firstName")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="lastName"
                      value="Last Name"
                      color={errors.lastName?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="lastName"
                    placeholder="Doe"
                    required={false}
                    color={errors.lastName?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.lastName?.message}</span></React.Fragment>}
                    {...register("lastName")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="middleName"
                      value="Other Name"
                      color={errors.middleName?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="middleName"
                    placeholder="Felix"
                    required={false}
                    color={errors.middleName?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.middleName?.message}</span></React.Fragment>}
                    {...register("middleName")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="username"
                      value="Username"
                      color={errors.username?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="username"
                    placeholder="john_doe"
                    required={false}
                    color={errors.username?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.username?.message}</span></React.Fragment>}
                    {...register("username")}
                  />
                </div>

                <div id="select_country">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="Select your country"
                      color={errors.country?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <Select
                    id="countries"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.country?.message}</span></React.Fragment>}
                    {...register("country", {
                      onChange: (e) => onUpdateCountry(e?.target?.value)
                    })}
                    color={errors.country?.message ? 'failure' : 'gray'}
                  >
                    <option>
                      Select Country
                    </option>
                    {allCountries?.map((item:AllCountries, idx:number) => {
                      return (
                        <option value={item?.isoCode} key={idx}>
                          {item?.name}
                        </option>
                      )
                    })}
                  </Select>
                  <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.country?.message}</p>
                </div>

                <div id="select_state">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="countries"
                      value="Select State"
                      color={errors.state?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <Select
                    id="state"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.state?.message}</span></React.Fragment>}
                    {...register("state", {
                      onChange: (e) => onUpdateState(e?.target?.value)
                    })}
                    color={errors.state?.message ? 'failure' : 'gray'}
                  >
                    <option>
                      Select State
                    </option>
                    {allCountryStates?.map((item:AllStatesAndCities, idx:number) => {
                      return (
                        <option value={item?.isoCode} key={idx}>
                          {item?.name}
                        </option>
                      )
                    })}
                  </Select>
                  <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.state?.message}</p>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="phoneNumber"
                      value="Phone Number"
                      color={errors.phoneNumber?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="phoneNumber"
                    placeholder={phoneNumber}
                    required={false}
                    color={errors.phoneNumber?.message ? 'failure' : 'gray'}
                    // value={phoneNumber}
                    helperText={<React.Fragment><span className="font-medium">{errors.phoneNumber?.message}</span></React.Fragment>}
                    addon={phoneCode}
                    {...register("phoneNumber", {
                      onChange: (e) => onUpdatePhoneNumber(e.target.value)
                    })}
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

              <Button type={`submit`} onClick={handleSubmit(handleCreateAdmin)} className={`my-4`}>Submit</Button>
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