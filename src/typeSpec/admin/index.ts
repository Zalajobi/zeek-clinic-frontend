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
  personalInfo: UserServicePersonalInfoResponseData;
  department: UserServiceDepartmentResponseData;
  unit: UserServiceUnitResponseData;
  servicearea: UserServiceServiceAreaResponseData;
  primary_role: UserServiceRoleResponseData;
}

export interface UserServiceUnitResponseData {
  id: string;
  name: string;
  description: string;
}

export interface UserServiceRoleResponseData {
  id: string;
  name: string;
  description: string;
}

export interface UserServiceServiceAreaResponseData {
  id: string;
  name: string;
  description: string;
}

export interface UserServiceDepartmentResponseData {
  id: string;
  name: string;
  description: string;
}

export interface UserServicePersonalInfoResponseData {
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
}
