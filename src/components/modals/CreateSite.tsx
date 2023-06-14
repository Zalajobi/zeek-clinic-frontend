import { Fragment } from "react";
import {Button, Label, Modal, Select, TextInput, ToggleSwitch} from "flowbite-react";
import Text from "../global/Text";
import ImageUpload from "../global/input/ImageUpload";
import {
  AllCountries, AllStatesAndCities,
  CreateSiteInput,
  CreateSiteInputSchema
} from "../../types/superadmin/formTypes";
import {useCreateSite} from "../../hooks/common/useCreateSite";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface CreateSiteModalProps {
  showModal: boolean
  close: () => void
  reloadPage: () => void
}

const CreateSite = ({showModal, close, reloadPage}: CreateSiteModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateSiteInput>({
    resolver: yupResolver(CreateSiteInputSchema)
  });
  const {
    // Values
    logo,
    is_private,
    has_appointment,
    has_caregiver,
    has_clinical,
    has_doctor,
    has_emergency,
    has_laboratory,
    has_medical_supply,
    has_nursing,
    has_inpatient,
    has_outpatient,
    has_pharmacy,
    has_physical_therapy,
    has_procedure,
    has_radiology,
    has_unit,
    has_vital,
    has_wallet,
    allCountries,
    allCountryStates,

    // Functions
    onUpdateLogo,
    setIs_private,
    setHas_appointment,
    setHas_caregiver,
    setHas_clinical,
    setHas_doctor,
    setHas_emergency,
    setHas_laboratory,
    setHas_medical_supply,
    setHas_nursing,
    setHas_inpatient,
    setHas_outpatient,
    setHas_pharmacy,
    setHas_physical_therapy,
    setHas_procedure,
    setHas_radiology,
    setHas_unit,
    setHas_vital,
    setHas_wallet,
    createNewSite,
    onUpdateCountry,
  } = useCreateSite(reloadPage, close)

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
            text={`Add Site`}
            size="2xl"
            weight={600}
            className="text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <div className={`grid grid-cols-6 gap-4 items-center`}>
              <div className={`col-span-2`}>
                <ImageUpload bucketFolder={`/site_image`} url={logo} updateImageUrl={onUpdateLogo}/>
              </div>

              <div className={`col-span-4 grid grid-cols-2 gap-4`}>
                <div>
                  <div className="mb-2 block w-full">
                    <Label
                      htmlFor="name"
                      value="Name"
                      color={errors.name?.message ? 'failure' : 'gray'}
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
                      color={errors.email?.message ? 'failure' : 'gray'}
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
                      // color={errors.zip_code?.message ? 'failure' : 'gray'}
                    />
                  </div>

                  <TextInput
                    id="zip_code"
                    placeholder="101231"
                    required={false}
                    type={`text`}
                    color={errors.zip_code?.message ? 'failure' : 'gray'}
                    helperText={<Fragment><span className="font-medium">{errors.zip_code?.message}</span></Fragment>}
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

            <div className={`grid gap-4 items-center grid-cols-2 md:grid-cols-4`}>
              <div className={`my-2`}>
                <ToggleSwitch
                  label="Is Private"
                  onChange={(value) => setIs_private(value)}
                  checked={is_private}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Appointment"
                  onChange={(value) => setHas_appointment(value)}
                  checked={has_appointment}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Care-Giver"
                  onChange={(value) => setHas_caregiver(value)}
                  checked={has_caregiver}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Clinical"
                  onChange={(value) => setHas_clinical(value)}
                  checked={has_clinical}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Doctors"
                  onChange={(value) => setHas_doctor(value)}
                  checked={has_doctor}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Emergency"
                  onChange={(value) => setHas_emergency(value)}
                  checked={has_emergency}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Laboratory"
                  onChange={(value) => setHas_laboratory(value)}
                  checked={has_laboratory}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Medical Supply"
                  onChange={(value) => setHas_medical_supply(value)}
                  checked={has_medical_supply}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Nursing"
                  onChange={(value) => setHas_nursing(value)}
                  checked={has_nursing}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Inpatient"
                  onChange={(value) => setHas_inpatient(value)}
                  checked={has_inpatient}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Outpatient"
                  onChange={(value) => setHas_outpatient(value)}
                  checked={has_outpatient}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Pharmacy"
                  onChange={(value) => setHas_pharmacy(value)}
                  checked={has_pharmacy}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Physical Therapy"
                  onChange={(value) => setHas_physical_therapy(value)}
                  checked={has_physical_therapy}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Procedure"
                  onChange={(value) => setHas_procedure(value)}
                  checked={has_procedure}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Radiology"
                  onChange={(value) => setHas_radiology(value)}
                  checked={has_radiology}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Unit"
                  onChange={(value) => setHas_unit(value)}
                  checked={has_unit}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Vital"
                  onChange={(value) => setHas_vital(value)}
                  checked={has_vital}
                />
              </div>

              <div className={`my-2`}>
                <ToggleSwitch
                  label="Has Wallet"
                  onChange={(value) => setHas_wallet(value)}
                  checked={has_wallet}
                />
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={handleSubmit(createNewSite)}
          >
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

export default CreateSite;