import { ReactNode } from 'react';

export interface AdminHeaderBaseTemplateData {
  role: string;
  siteId: string;
  personalInfo: AdminHeaderBaseTemplateDataPersonalInfo;
}

export interface AdminHeaderBaseTemplateDataPersonalInfo {
  first_name: string;
  last_name: string;
  dob?: any;
}

export interface AppointmentTableData {
  id: string;
  title: string;
  first_name: string;
  last_name: string;
  date: string;
  age: number;
  phone: string;
  for: string;
}

export interface AppointmentTableRowData {
  name: ReactNode;
  date: ReactNode;
  age: ReactNode;
  phone: ReactNode;
  for: ReactNode;
  action: ReactNode;
}

export interface ProviderPageSiteResponseData {
  address: string;
  name: string;
  email: string;
  country: string;
  phone: string;
  id: string;
  state: string;
  city: string;
  created_at: string;
}

export interface ProviderAndRelationAPIResponse {
  email: string;
  id: string;
  status: string;
  created_at: string;
  siteId: string;
  personalInfo: {
    phone: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    title: string;
    gender: string;
    dob: any;
    country: string;
    state: string;
    city: string;
    address: string;
    profile_pic: string;
    id: string;
  };
  department: {
    name: string;
    id: string;
  };
  unit: {
    name: string;
    id: string;
  };
  servicearea: {
    name: string;
    id: string;
  };
  primary_role: {
    name: string;
    id: string;
  };
}
