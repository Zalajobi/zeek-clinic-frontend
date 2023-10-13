import { ReactNode } from 'react';
import {
  // @ts-ignore
  PersonalInfoResponseData,
  UserServiceDepartmentResponseData,
  UserServicePersonalInfoResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';

export interface AdminHeaderBaseTemplateData {
  role: string;
  siteId: string;
  personalInfo: PersonalInfoResponseData;
}

export interface AppointmentTableData {
  id: string;
  img?: string;
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
  img?: string;
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
