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
  type?: ReactNode;
  total_beds?: ReactNode;
  occupied_beds?: ReactNode;
  nursing?: ReactNode;
  charts?: ReactNode;
  upload?: ReactNode;
  refer_outpx?: ReactNode;
  referral?: ReactNode;
  consult?: ReactNode;
  radiology?: ReactNode;
  clerking?: ReactNode;
  dental?: ReactNode;
  logs?: ReactNode;
  review?: ReactNode;
  time_of_death?: ReactNode;
  discharge?: ReactNode;
  move_patient?: ReactNode;
  transfer_patient?: ReactNode;
  admit_patient?: ReactNode;
  med_supply?: ReactNode;
  vitals?: ReactNode;
  appointment?: ReactNode;
  lab_test?: ReactNode;
  procedure?: ReactNode;
  note?: ReactNode;
  prescription?: ReactNode;
  plan?: ReactNode;
}
