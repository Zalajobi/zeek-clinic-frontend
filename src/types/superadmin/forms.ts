import * as yup from 'yup';

// Create Site
export type CreateSiteInput = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  is_private: boolean;
  has_appointment: boolean;
  has_caregiver: boolean;
  has_clinical: boolean;
  has_doctor: boolean;
  has_emergency: boolean;
  has_laboratory: boolean;
  has_medical_supply: boolean;
  has_nursing: boolean;
  has_inpatient: boolean;
  has_outpatient: boolean;
  has_pharmacy: boolean;
  has_physical_therapy: boolean;
  has_procedure: boolean;
  has_radiology: boolean;
  has_unit: boolean;
  has_vital: boolean;
  has_wallet: boolean;
};

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
