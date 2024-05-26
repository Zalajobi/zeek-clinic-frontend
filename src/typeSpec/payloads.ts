// API Request Payloads
export interface HospitalPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  logo: string;
  zipCode: string;
  id: string;
  siteCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface SitePayload {
  address?: string;
  name?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  logo?: string;
  phone?: string;
  countryCode?: string;
  zipCode?: string;
  is_private?: boolean;
  has_appointment?: boolean;
  has_caregiver?: boolean;
  has_clinical?: boolean;
  has_doctor?: boolean;
  has_emergency?: boolean;
  has_laboratory?: boolean;
  has_medical_supply?: boolean;
  has_nursing?: boolean;
  has_inpatient?: boolean;
  has_outpatient?: boolean;
  has_pharmacy?: boolean;
  has_physical_therapy?: boolean;
  has_procedure?: boolean;
  has_radiology?: boolean;
  has_unit?: boolean;
  has_vital?: boolean;
  has_wallet?: boolean;
  hospitalId?: string;
  id?: string;
  status?: 'ACTIVE' | 'CLOSED' | 'PENDING' | 'DEACTIVATED';
  createdAt?: string;
  updatedAt?: string;
}

export interface DepartmentPayload {
  created_at?: string;
  description?: string;
  id?: string;
  name?: string;
  siteId?: string;
  updated_at?: string;
}

export interface RolesPayload {
  description: string;
  name?: string;
  siteId?: string;
  prescription?: boolean;
  note?: boolean;
  procedure?: boolean;
  lab_test?: boolean;
  appointment?: boolean;
  vitals?: boolean;
  med_supply?: boolean;
  admit_patient?: boolean;
  transfer_patient?: boolean;
  move_patient?: boolean;
  discharge?: boolean;
  time_of_death?: boolean;
  review?: boolean;
  logs?: boolean;
  dental?: boolean;
  clerking?: boolean;
  radiology?: boolean;
  consult?: boolean;
  referral?: boolean;
  refer_outpx?: boolean;
  upload?: boolean;
  charts?: boolean;
  nursing?: boolean;
  plan?: boolean;
  id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ServiceAreaPayload {
  id?: string;
  name?: string;
  description?: string;
  siteId?: string;
  type?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface PersonalInfoPayload {
  phone?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  title?: string;
  gender?: string;
  dob?: Date;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  address_two?: string;
  profile_pic?: string;
  id?: string;
  zip_code?: string;
  religion?: string;
  marital_status?: string;
  created_at?: string;
}

export interface ServiceAreaPayload {
  id?: string;
  name?: string;
  description?: string;
}

export interface RolePayload {
  id?: string;
  name?: string;
  description?: string;
}

export interface ProviderPayload {
  id?: string;
  site_id?: string;
  role_id?: string;
  profile_id?: string;
  dept_id?: string;
  area_id?: string;
  unit_id?: string;
  email?: string;
  staff_id?: string;
  is_consultant?: boolean;
  is_specialist?: boolean;
  appointments?: boolean;
  status?: string;
  created_at?: string;
  role?: string;
  dept?: string;
  area?: string;
  unit?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  title?: string;
  gender?: string;
  dob?: string;
  address?: string;
  address_two?: string;
  city?: string;
  state?: string;
  country?: string;
  religion?: string;
  marital_status?: string;
  zip_code?: string;
  profile_pic?: string;
}
