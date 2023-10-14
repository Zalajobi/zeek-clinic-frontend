import { ReactNode } from 'react';

export interface SuperadminBaseData {
  id: string;
  email: string;
  username: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  other_name: string;
}

export interface GetHospitalResponseData {
  id: string;
  name: string;
  email: string;
  site_count: number;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  created_at: string;
  updated_at: string;
  status: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED';
}

export interface HospitalRowData {
  checkbox: ReactNode;
  name: ReactNode;
  email: ReactNode;
  site_count: ReactNode;
  phone: ReactNode;
  address: ReactNode;
  city: ReactNode;
  state: ReactNode;
  country: ReactNode;
  created_at: ReactNode;
  action: ReactNode;
}

export interface SiteRowData {
  checkbox: ReactNode;
  name: ReactNode;
  email: ReactNode;
  phone: ReactNode;
  country: ReactNode;
  state: ReactNode;
  city: ReactNode;
  address: ReactNode;
  status: ReactNode;
  created_at: ReactNode;
  action: ReactNode;
}

export interface HospitalOrganizationData {
  id: string;
  name: string;
  email: string;
  site_count: number;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  status: string;
  zip_code?: string;
  country_code: string;
  created_at: string;
  updated_at: string;
  activeSites: number;
  closedSites: number;
  pendingSites: number;
  deactivatedSites: number;
}

export interface SuperadminSiteData {
  id: string;
  address: string;
  hospital_id: string;
  name: string;
  email: string;
  city: string;
  state: string;
  country: string;
  logo: string;
  time_zone: string;
  phone: string;
  status: string;
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
  created_at: string;
  updated_at: string;
}
