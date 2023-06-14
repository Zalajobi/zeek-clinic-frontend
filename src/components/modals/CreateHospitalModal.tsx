import {Button, Label, Modal, Select, TextInput} from 'flowbite-react';
import { Fragment } from 'react'
import {useCreateHospitalModal} from "../../hooks/superadmin/useCreateHospitalModal";
import Text from "../global/Text";
import ImageUpload from "../global/input/ImageUpload";
import {useForm} from "react-hook-form";
import {
  AllCountries, AllStatesAndCities,
  CreateHospitalInput,
  CreateHospitalInputSchema,
} from "../../types/superadmin/formTypes";
import {yupResolver} from "@hookform/resolvers/yup";

interface CreateHospitalModalProps {
  showModal: boolean
  close: () => void
}

const CreateHospitalModal = ({showModal, close}:CreateHospitalModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateHospitalInput>({
    resolver: yupResolver(CreateHospitalInputSchema)
  });

  const {
    // Fields
    logo,
    allCountries,
    allCountryStates,

    // Functions
    createNewOrganization,
    setLogo,
    onUpdateCountry,
  } = useCreateHospitalModal()

  return (
    <Fragment>
      <Modal
        onClose={close}
        dismissible
        position="center"
        show={showModal}
        size="6xl"
      >
        <Modal.Header>
          <Text
            text={`Add Organization`}
            size="2xl"
            weight={600}
            className="text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <div className={`grid grid-cols-6 gap-4 items-center`}>
              <div className={`col-span-2`}>
                <ImageUpload bucketFolder={`/hospital_image`} url={logo} updateImageUrl={setLogo}/>
              </div>

              <div className={`col-span-4 grid grid-cols-2 gap-4`}>
                <div>
                  <div className="mb-2 block w-full">
                    <Label
                      htmlFor="name"
                      value="Company Name"
                    />
                  </div>

                  <TextInput
                    id="name"
                    placeholder="Zeek Clinic"
                    required={false}
                    color={errors.name?.message ? 'failure' : 'gray'}
                    helperText={<Fragment><span className="font-medium">{errors.name?.message}</span></Fragment>}
                    {...register("name")}
                  />
                </div>

                <div>
                  <div className="mb-2 block w-full">
                    <Label
                      htmlFor="email"
                      value="Email"
                    />
                  </div>

                  <TextInput
                    id="email"
                    placeholder="john@doe.com"
                    required={false}
                    type={`email`}
                    color={errors.email?.message ? 'failure' : 'gray'}
                    helperText={<Fragment><span className="font-medium">{errors.email?.message}</span></Fragment>}
                    {...register("email")}
                  />
                </div>

                <div>
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
                    helperText={<Fragment><span className="font-medium">{errors.country?.message}</span></Fragment>}
                    {...register("country", {
                      onChange: (e) => onUpdateCountry(e?.target?.value)
                    })}
                    color={errors.country?.message ? 'failure' : 'gray'}
                  >
                    <option value={``}>
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

                <div>
                  <div className={`mb-2 block`}>
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
                      helperText={<Fragment><span className="font-medium">{errors.state?.message}</span></Fragment>}
                      {...register("state")}
                      color={errors.state?.message ? 'failure' : 'gray'}
                    >
                      <option value={``}>
                        Select State
                      </option>
                      {allCountryStates?.map((item:AllStatesAndCities, idx:number) => {
                        return (
                          <option value={`${item?.name} (${item?.isoCode})`} key={idx}>
                            {item?.name}
                          </option>
                        )
                      })}
                    </Select>
                  </div>
                </div>

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
                    color={errors.city?.message ? 'failure' : 'gray'}
                    helperText={<Fragment><span className="font-medium">{errors.city?.message}</span></Fragment>}
                    {...register("city")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="phone"
                      value="Phone Number"
                      color={errors.phone?.message ? 'failure' : 'gray'}
                    />
                  </div>

                  <TextInput
                    id="phone"
                    placeholder="+2347053980998"
                    required={false}
                    type={`tel`}
                    color={errors.phone?.message ? 'failure' : 'gray'}
                    helperText={<Fragment><span className="font-medium">{errors.phone?.message}</span></Fragment>}
                    {...register("phone")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="zip_code"
                      value="Zip Code"
                      color={errors.zip_code?.message ? 'failure' : 'gray'}
                    />
                  </div>

                  <TextInput
                    id="zip_code"
                    placeholder="101231"
                    required={false}
                    type={`text`}
                    color={errors.zip_code?.message ? 'failure' : 'gray'}
                    {...register("zip_code")}
                  />
                </div>

                <div>
                  <div id="address" className={`w-full`}>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="address"
                        value="Address"
                        color={errors.address?.message ? 'failure' : 'gray'}
                      />
                    </div>
                    <TextInput
                      id="address"
                      required={false}
                      color={errors.address?.message ? 'failure' : 'gray'}
                      helperText={<Fragment><span className="font-medium">{errors.address?.message}</span></Fragment>}
                      {...register("address")}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit(createNewOrganization)}>
            I accept
          </Button>
          <Button
            color="gray"
            onClick={close}
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default CreateHospitalModal