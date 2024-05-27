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
  createdAt: string;
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
  createdAt: ReactNode;
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
  createdAt: ReactNode;
  action: ReactNode;
}

export interface HospitalDetailsData {
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
  createdAt: string;
  updated_at: string;
}

export interface HospitalSiteCountData {
  activeSites: number;
  closedSites: number;
  deactivatedSites: number;
  pendingSites: number;
  totalSites: number;
}
