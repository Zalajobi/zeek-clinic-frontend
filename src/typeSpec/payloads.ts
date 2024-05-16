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
  id?: string;
  name?: string;
  description?: string;
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
