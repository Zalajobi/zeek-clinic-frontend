export interface SitePayload {
  id?: string;
  hospitalId?: string;
  address?: string;
  name?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  logo?: string;
  time_zone?: string;
  phone?: string;
  zip_code?: string;
  country_code?: string;
  status?: 'ACTIVE' | 'CLOSED' | 'PENDING' | 'DEACTIVATED';
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
  created_at?: Date;
  updated_at?: Date;
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

export interface HospitalPayload {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  logo?: string;
  status?: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED';
  zip_code?: string;
  country_code?: string;
  created_at?: string;
  updated_at?: string;
  site_count?: number;
  id: string;
}
