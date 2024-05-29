import { ReactNode } from 'react';
import { UserServiceUnitResponseData } from '@typeSpec/index';
import {
  DepartmentPayload,
  PersonalInfoPayload,
  RolePayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';

export interface AdminHeaderBaseTemplateData {
  role: string;
  siteId: string;
  personalInfo: PersonalInfoPayload;
  email: string;
  username: string;
  staff_id: string;
  password_reset_request_timestamp: string;
  id: string;
  createdAt: string;
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

export interface ProviderAndRelationAPIResponse {
  img?: string;
  email: string;
  id: string;
  status: string;
  createdAt: string;
  siteId: string;
  personalInfo: PersonalInfoPayload;
  department: DepartmentPayload;
  unit: UserServiceUnitResponseData;
  servicearea: ServiceAreaPayload;
  primary_role: RolePayload;
}
