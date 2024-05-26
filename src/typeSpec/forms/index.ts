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
    email: yup.string().required('Email field is required'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    middle_name: yup.string().optional(),
    username: yup
      .string()
      .required()
      .min(8, 'Username must be at least 8 characters long'),
    country: yup.string().required('Choose the country you reside in'),
    state: yup.string().required('State is required'),
    city: yup.string().required('Choose the city you reside in'),
    phone: yup.number().required('Phone number is required'),
    country_code: yup.string().optional(),
    zip_code: yup.string().required('Zip code is required'),
    role: yup.string().required('User role must be selected'),
    // department: yup.string().required('Department must be selected'),
    gender: yup.string().required('Please choose a valid gender'),
    dob: yup.string().required('Date of birth is required'),
    title: yup.string().required('User title is required'),
    staff_id: yup
      .string()
      .min(7, 'Minimum of Seven(7) Characters')
      .max(20, 'Maximum of Twenty(20) characters')
      .required('Staff ID is a required field'),
    marital_status: yup
      .string()
      .required('Relationship Status is a required field'),
    address: yup
      .string()
      .required('User address is required')
      .min(10, 'Address too short'),
    address_two: yup.string().optional(),
    profile_img: yup.string().optional(),
    religion: yup.string().optional(),
  })
  .required();

// Create Provider

export const CreateProviderInputSchema = yup
  .object({
    title: yup.string().required('Title is Required'),
    first_name: yup
      .string()
      .required('First Name is a required field')
      .min(4, 'First Name must be at least four(4) character(s)')
      .max(25, 'Exceeded the 25 character threshold'),
    last_name: yup
      .string()
      .required('Last Name is a required field')
      .min(4, 'Last Name must be at least four(4) character(s)')
      .max(25, 'Exceeded the 25 character threshold'),
    middle_name: yup.string().optional(),
    gender: yup.string().required('Gender is Required'),
    dob: yup.string().required('Date Of Birth is a required field'),
    email: yup
      .string()
      .email('Email format is wrong')
      .required('Email is a required field'),
    phone: yup.string().required('Phone Number is a required field'),
    department: yup.string().required('Providers Department is not selected'),
    role: yup.string().required('Providers Role is not selected'),
    serviceArea: yup
      .string()
      .required('Providers Service Area is not selected'),
    unit: yup.string().required('Providers Unit is not selected'),
    country: yup.string().required('Country is a required field'),
    state: yup.string().optional(),
    city: yup
      .string()
      .required('City is a required field')
      .min(3, 'City is too short'),
    staff_id: yup
      .string()
      .min(7, 'Minimum of Seven(7) Characters')
      .max(20, 'Maximum of Twenty(20) characters')
      .required('Staff ID is a required field'),
    zip_code: yup.string().required('ZipCode is a required field'),
    marital_status: yup.string().required('Please Select One'),
    religion: yup.string().required('Religion is a required field'),
    password: yup
      .string()
      .min(8, 'Must be at least Eight(8) characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .optional(),
    username: yup.string().optional(),
    address: yup.string().required('Address is required'),
    address_two: yup.string().optional(),
    is_consultant: yup.boolean().default(false),
    is_specialist: yup.boolean().default(false),
    appointments: yup.boolean().default(false),
    profile_pic: yup.string().optional(),
  })
  .required();

export const CreateDepartmentInputSchema = yup.object({
  name: yup.string().required('Department name is required'),
  description: yup
    .string()
    .required('Department description is required')
    .min(20, 'Description too short'),
});
