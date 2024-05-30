import * as yup from 'yup';

// Create Site
export const CreateSiteInputSchema = yup
  .object({
    email: yup.string().required('Email field is required'),
    name: yup.string().required('Organization name is required'),
    phone: yup.number().required('Phone number is required'),
    address: yup
      .string()
      .required('User address is required')
      .min(10, 'Address too short'),
    city: yup.string().optional(),
    state: yup.string().optional(),
    country: yup.string().required('Organization Country is required'),
    zipCode: yup.string().required('Zip Code is required'),
    is_private: yup.boolean().default(false),
    has_appointment: yup.boolean().default(false),
    has_caregiver: yup.boolean().default(false),
    has_clinical: yup.boolean().default(false),
    has_doctor: yup.boolean().default(false),
    has_emergency: yup.boolean().default(false),
    has_laboratory: yup.boolean().default(false),
    has_medical_supply: yup.boolean().default(false),
    has_nursing: yup.boolean().default(false),
    has_inpatient: yup.boolean().default(false),
    has_outpatient: yup.boolean().default(false),
    has_pharmacy: yup.boolean().default(false),
    has_physical_therapy: yup.boolean().default(false),
    has_procedure: yup.boolean().default(false),
    has_radiology: yup.boolean().default(false),
    has_unit: yup.boolean().default(false),
    has_vital: yup.boolean().default(false),
    has_wallet: yup.boolean().default(false),
  })
  .required();

// Create Organization
export const CreateHospitalInputSchema = yup
  .object({
    email: yup.string().required('Email field is required'),
    name: yup.string().required('Organization name is required'),
    phone: yup.number().required('Phone number is required'),
    address: yup
      .string()
      .required('User address is required')
      .min(10, 'Address too short'),
    city: yup.string().optional(),
    state: yup.string().required('Organization State is required'),
    country: yup.string().required('Organization Country is required'),
    zipCode: yup.string().required('Zip Code is required'),
  })
  .required();

// Create Admin
export const CreateAdminUserInputSchema = yup
  .object({
    title: yup.string().required('User title is required'),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    middleName: yup.string().optional(),
    email: yup.string().required('Email field is required'),
    gender: yup.string().required('Please choose a valid gender'),
    staffId: yup
      .string()
      .min(7, 'Minimum of Seven(7) Characters')
      .max(20, 'Maximum of Twenty(20) characters')
      .required('Staff ID is a required field'),
    dob: yup.string().required('Date of birth is required'),
    religion: yup.string().optional(),
    maritalStatus: yup
      .string()
      .required('Relationship Status is a required field'),
    country: yup.string().required('Choose the country you reside in'),
    state: yup.string().optional(),
    city: yup.string().required('Choose the city you reside in'),
    zipCode: yup.string().required('Zip code is required'),
    address: yup
      .string()
      .required('User address is required')
      .min(10, 'Address too short'),
    alternateAddress: yup.string().optional(),
    phone: yup.number().required('Phone number is required'),
    role: yup.string().required('User role must be selected'),
    profilePic: yup.string().optional(),
  })
  .required();

// Create Provider
export const CreateProviderInputSchema = yup
  .object({
    title: yup.string().required('Title is Required'),
    firstName: yup
      .string()
      .required('First Name is a required field')
      .min(4, 'First Name must be at least four(4) character(s)')
      .max(25, 'Exceeded the 25 character threshold'),
    lastName: yup
      .string()
      .required('Last Name is a required field')
      .min(4, 'Last Name must be at least four(4) character(s)')
      .max(25, 'Exceeded the 25 character threshold'),
    middleName: yup.string().optional(),
    gender: yup.string().required('Gender is Required'),
    dob: yup.string().required('Date Of Birth is a required field'),
    email: yup
      .string()
      .email('Email format is wrong')
      .required('Email is a required field'),
    phone: yup.string().required('Phone Number is a required field'),
    departmentId: yup.string().required('Providers Department is not selected'),
    roleId: yup.string().required('Providers Role is not selected'),
    serviceAreaId: yup
      .string()
      .required('Providers Service Area is not selected'),
    unitId: yup.string().required('Providers Unit is not selected'),
    country: yup.string().required('Country is a required field'),
    state: yup.string().optional(),
    city: yup
      .string()
      .required('City is a required field')
      .min(3, 'City is too short'),
    staffId: yup
      .string()
      .min(7, 'Minimum of Seven(7) Characters')
      .max(20, 'Maximum of Twenty(20) characters')
      .required('Staff ID is a required field'),
    zipCode: yup.string().required('ZipCode is a required field'),
    maritalStatus: yup.string().required('Please Select One'),
    religion: yup.string().required('Religion is a required field'),
    password: yup
      .string()
      .min(8, 'Must be at least Eight(8) characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .optional(),
    address: yup.string().required('Address is required'),
    alternateAddress: yup.string().optional(),
    isConsultant: yup.boolean().default(false),
    isSpecialist: yup.boolean().default(false),
    appointments: yup.boolean().default(false),
    profilePic: yup.string().optional(),
  })
  .required();

// Create Department
export const CreateDepartmentInputSchema = yup.object({
  name: yup.string().required('Department name is required'),
  description: yup
    .string()
    .required('Department description is required')
    .min(20, 'Description too short'),
});

// Create Unit
export const CreateUnitInputSchema = yup.object({
  name: yup.string().required('Department name is required'),
  totalBeds: yup.number().default(0),
  description: yup
    .string()
    .required('Department description is required')
    .min(20, 'Description too short'),
});

// Create ServiceArea
export const CreateServiceAreaInputSchema = yup.object({
  name: yup.string().required('Department name is required'),
  type: yup.string().required('Department type is required'),
  description: yup
    .string()
    .required('Department description is required')
    .min(20, 'Description too short'),
});

// Create Role
export const CreateRoleInputSchema = yup.object({
  name: yup.string().required('Department name is required'),
  description: yup
    .string()
    .required('Department description is required')
    .min(20, 'Description too short'),
  prescription: yup.boolean().default(false),
  note: yup.boolean().default(false),
  procedure: yup.boolean().default(false),
  lab_test: yup.boolean().default(false),
  appointment: yup.boolean().default(false),
  vitals: yup.boolean().default(false),
  med_supply: yup.boolean().default(false),
  admit_patient: yup.boolean().default(false),
  transfer_patient: yup.boolean().default(false),
  move_patient: yup.boolean().default(false),
  discharge: yup.boolean().default(false),
  time_of_death: yup.boolean().default(false),
  review: yup.boolean().default(false),
  logs: yup.boolean().default(false),
  dental: yup.boolean().default(false),
  clerking: yup.boolean().default(false),
  radiology: yup.boolean().default(false),
  consult: yup.boolean().default(false),
  referral: yup.boolean().default(false),
  refer_outpx: yup.boolean().default(false),
  upload: yup.boolean().default(false),
  charts: yup.boolean().default(false),
  nursing: yup.boolean().default(false),
  plan: yup.boolean().default(false),
});
