import { ReactNode } from 'react';

export interface AdminHeaderBaseTemplateData {
  role: string;
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
