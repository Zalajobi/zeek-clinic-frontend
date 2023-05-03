import React from 'react'
import Text from "../../components/global/Text";
import {useSuperadminCreateAdminUser} from "../../hooks/superadmin/useSuperadminCreateAdminUser";
import {Button, Label, Select, TextInput} from "flowbite-react";
import {ToasterConfig} from "../../components/global/Toast";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import {AllCountries, AllStatesAndCities, CreateUserInput, CreateUserInputSchema} from '../../types/superadmin/formTypes';

const CreateNewUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserInput>({
    resolver: yupResolver(CreateUserInputSchema)
  });

  const {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
  } = useSuperadminCreateAdminUser()

  return (
    <React.Fragment>
      <div className="flex items-center justify-center bg-[#F9FAFB] dark:bg-black h-screen">
        <div className="max-w-screen-xl items-center justify-center h-full w-full grid grid-cols-1 md:flex md:flex-row gap-4 p-20">
          <form className="w-full flex flex-row rounded-[10px] shadow-2xl bg-white p-10 dark:bg-[#1F2A37] m-10" onSubmit={handleSubmit(handleCreateAdmin)}>
            <div className="flex flex-col w-full">
              <Text text={`Welcome back`} className={`text-[#111928] dark:text-white mb-4`} size="2xl" weight={700}/>

              <div className="flex flex-row w-full">
                <Text text={`Don't have an account`} weight={500} size={"sm"} className={`text-[#6B7280] dark:text-white mr-2`}/>

                <a className="text-sm font-medium text-[#1C64F2] leading-[27px] hover:cursor-pointer" href="/admin/signup">Signup</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                {/*Title*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="title"
                      value="Title"
                      color={errors.title?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="title"
                    placeholder="Dr."
                    required={false}
                    color={errors.title?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.title?.message}</span></React.Fragment>}
                    {...register("title")}
                  />
                </div>

                {/*First Name*/}
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

                {/*Last Name*/}
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

                {/*Middle name*/}
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

                {/*Username*/}
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

                {/*Gender*/}
                <div id="select_gender">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="select_gender"
                      value="Gender"
                      color={errors.gender?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <Select
                    id="state"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.gender?.message}</span></React.Fragment>}
                    {...register("gender")}
                    color={errors.gender?.message ? 'failure' : 'gray'}
                  >
                    <option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>

                  </Select>
                </div>

                {/*DOB*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="dob"
                      value="Date of birth"
                      color={errors.dob?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="dob"
                    required={false}
                    type="date"
                    color={errors.dob?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.dob?.message}</span></React.Fragment>}
                    {...register("dob")}
                  />
                </div>

                {/*Role*/}
                <div id="select_role">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="role"
                      value="Select Role"
                      color={errors.role?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <Select
                    id="role"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.role?.message}</span></React.Fragment>}
                    {...register("role")}
                    color={errors.role?.message ? 'failure' : 'gray'}
                  >
                    <option>
                      Select Role
                    </option>
                    {allRoles?.map((item:any, idx:number) => {
                      return (
                        <option key={idx}>
                          {item?.replaceAll('_', ' ')}
                        </option>
                      )
                    })}
                  </Select>
                  <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.role?.message}</p>
                </div>

                {/*Department*/}
                <div id="select_dept">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="select_dept"
                      value="Select Department"
                      color={errors.department?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <Select
                    id="state"
                    required={false}
                    helperText={<React.Fragment><span className="font-medium">{errors.department?.message}</span></React.Fragment>}
                    {...register("department")}
                    color={errors.department?.message ? 'failure' : 'gray'}
                  >
                    <option>
                      Select Department
                    </option>
                    {allDepartments?.map((item:any, idx:number) => {
                      return (
                        <option key={idx}>
                          {item?.replaceAll('_', ' ')}
                        </option>
                      )
                    })}
                  </Select>
                  <p className={`mt-2 text-sm text-gray-500 dark:text-gray-400`}>{errors.department?.message}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                {/*Email*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="email"
                      value="Email"
                      color={errors.email?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="john_doe@gmail.com"
                    required={false}
                    type="email"
                    color={errors.email?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.email?.message}</span></React.Fragment>}
                    {...register("email")}
                  />
                </div>

                {/*Short Bio*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="bio"
                      value="Short Bio"
                      color={errors.bio?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="bio"
                    placeholder="Short Biography"
                    required={false}
                    type="text"
                    color={errors.bio?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.bio?.message}</span></React.Fragment>}
                    sizing={`lg`}
                    {...register("bio")}
                  />
                </div>
              </div>

              {/*Address*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
                {/*Country*/}
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
                </div>

                {/*State*/}
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
                </div>

                {/*City*/}
                {allStateCities?.length !== 0 ? (
                  <div id="select_city">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="countries"
                        value="City"
                        color={errors.city?.message ? 'failure' : 'gray'}
                      />
                    </div>
                    <Select
                      id="state"
                      required={false}
                      helperText={<React.Fragment><span className="font-medium">{errors.city?.message}</span></React.Fragment>}
                      {...register("city", {
                        onChange: (e) => onUpdateCity(e?.target?.value)
                      })}
                      color={errors.state?.message ? 'failure' : 'gray'}
                    >
                      <option>
                        Select City
                      </option>
                      {allStateCities?.map((item:AllStatesAndCities, idx:number) => {
                        return (
                          <option value={item?.name} key={idx}>
                            {item?.name}
                          </option>
                        )
                      })}
                    </Select>
                  </div>
                ) : (
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="city"
                        value="City"
                        color={errors.city?.message ? 'failure' : 'gray'}
                      />
                    </div>
                    <TextInput
                      id="city"
                      placeholder="city"
                      required={false}
                      color={errors.username?.message ? 'failure' : 'gray'}
                      helperText={<React.Fragment><span className="font-medium">{errors.city?.message}</span></React.Fragment>}
                      {...register("city")}
                    />
                  </div>
                )}

                {/*Address*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="address"
                      value="Address"
                      color={errors.username?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="address"
                    required={false}
                    color={errors.address?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.address?.message}</span></React.Fragment>}
                    {...register("address")}
                  />
                </div>

                {/*AAlternate Address*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="alternateAddress"
                      value="Alternative Address"
                      color={errors.alternateAddress?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="alternateAddress"
                    required={false}
                    color={errors.alternateAddress?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.alternateAddress?.message}</span></React.Fragment>}
                    {...register("alternateAddress")}
                  />
                </div>

                {/*Zipcode*/}
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="zipCode"
                      value="Zip Code"
                      color={errors.zipCode?.message ? 'failure' : 'gray'}
                    />
                  </div>
                  <TextInput
                    id="zipCode"
                    placeholder={`101241`}
                    required={false}
                    type="number"
                    color={errors.zipCode?.message ? 'failure' : 'gray'}
                    helperText={<React.Fragment><span className="font-medium">{errors.zipCode?.message}</span></React.Fragment>}
                    {...register("zipCode")}
                  />
                </div>
              </div>


              {/*phoneNumber*/}
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
                  placeholder={`9189011920`}
                  required={false}
                  type="tel"
                  color={errors.phoneNumber?.message ? 'failure' : 'gray'}
                  helperText={<React.Fragment><span className="font-medium">{errors.phoneNumber?.message}</span></React.Fragment>}
                  addon={phoneCode}
                  {...register("phoneNumber")}
                />
              </div>

              <Button type={`submit`} onClick={handleSubmit(handleCreateAdmin)} className={`my-4`}>Submit</Button>
            </div>
          </form>
        </div>
      </div>

      <ToasterConfig/>
    </React.Fragment>
  )
}

export default CreateNewUser;