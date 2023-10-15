import { ReactNode } from 'react';

export interface ProvidersPageRowData {
  checkbox?: ReactNode;
  name: ReactNode;
  email: ReactNode;
  phone: ReactNode;
  role: ReactNode;
  department: ReactNode;
  unit: ReactNode;
  serviceArea: ReactNode;
  gender: ReactNode;
  country: ReactNode;
  status: ReactNode;
  created_at: ReactNode;
  action: ReactNode;
}

export interface DepartmentsPatientAndProviderCountRowData {
  created_at: ReactNode;
  description: ReactNode;
  name: ReactNode;
  patients: ReactNode;
  providers: ReactNode;
  action: ReactNode;
  updated_at: ReactNode;
}
