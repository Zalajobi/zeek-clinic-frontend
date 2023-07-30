import * as yup from 'yup';
import { relationshipStatus } from '../../lib/constants/constants';

export type AllCountries = {
  currency: string;
  flag: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
  phonecode: string;
  timezones: TimeZones[];
};

export type AllStatesAndCities = {
  name: string;
  isoCode: string;
  country_code: string;
  stateCode: string;
  latitude: string;
  longitude: string;
};

export type TimeZones = {
  abbreviation: string;
  gmtOffset: number;
  gmtOffsetName: string;
  tzName: string;
  zoneName: string;
};

export type CreateUserInput = {
  email: string;
  first_name: string;
  last_name: string;
  other_name: string;
  username: string;
  country: string;
  state: string;
  city: string;
  phone_number: string;
  country_code?: string;
  zip_code: string;
  role: string;
  department: string;
  gender: string;
  dob: string;
  title: string;
  bio?: string;
  address: string;
  address_two?: string;
  profile_img?: string;
};

export type CreateHospitalInput = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code?: string;
};

export type CreateSiteInput = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
};

export type AdminAddProviderInput = {
  title: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  dob: string;
  gender: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  serviceArea: string;
  unit: string;
  country: string;
  state: string;
  city?: string;
  staff_id: string;
  zip_code: string;
  relationship_status: string;
  religion: string;
  password: string;
  username: string;
  is_consultant: boolean;
  is_specialist: boolean;
  appointments: boolean;
  address: string;
};

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
    zip_code: yup.string().required('Zip Code is required'),
  })
  .required();

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
    state: yup.string().required('Organization State is required'),
    country: yup.string().required('Organization Country is required'),
    zip_code: yup.string().required('Zip Code is required'),
  })
  .required();

export const CreateUserInputSchema = yup
  .object({
    email: yup.string().required('Email field is required'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    other_name: yup.string().optional(),
    username: yup
      .string()
      .required()
      .min(8, 'Username must be at least 8 characters long'),
    country: yup.string().required('Choose the country you reside in'),
    state: yup.string().required('State is required'),
    city: yup.string().required('Choose the city you reside in'),
    phone_number: yup.number().required('Phone number is required'),
    country_code: yup.string().optional(),
    zip_code: yup.string().required('Zip code is required'),
    role: yup.string().required('User role must be selected'),
    department: yup.string().required('Department must be selected'),
    gender: yup.string().required('Please choose a valid gender'),
    dob: yup.string().required('Date of birth is required'),
    title: yup.string().required('User title is required'),
    bio: yup
      .string()
      .optional()
      .min(100, 'Bio requires at least 100 characters')
      .max(1000, 'Cannot be more than 1000 characters'),
    address: yup
      .string()
      .required('User address is required')
      .min(10, 'Address too short'),
    address_two: yup.string().optional().min(10, 'Address too short'),
    profile_img: yup.string().optional(),
  })
  .required();

export const AdminAddProviderInputSchema = yup
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
    state: yup.string().required('State is a required field'),
    staff_id: yup
      .string()
      .min(7, 'Minimum of Seven(7) Characters')
      .max(20, 'Maximum of Twenty(20) characters')
      .required('Staff ID is a required field'),
    city: yup.string().optional(),
    zip_code: yup.string().required('ZipCode is a required field'),
    relationship_status: yup
      .string()
      .required('Relationship Status is a required field'),
    religion: yup.string().required('Religion is a required field'),
    username: yup.string().required('Username is required'),
    address: yup.string().required('Address is required'),
    is_consultant: yup.boolean().default(false),
    is_specialist: yup.boolean().default(false),
    appointments: yup.boolean().default(false),
    password: yup
      .string()
      .min(8, 'Must be at least Eight(8) characters long')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      )
      .required('Password is required'),
  })
  .required();
