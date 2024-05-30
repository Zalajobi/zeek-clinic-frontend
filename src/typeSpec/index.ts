import {
  DepartmentPayload,
  PersonalInfoPayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';

export interface UserServicePatientDetailsResponse {
  siteId: string;
  email: string;
  status: string;
  id: string;
  createdAt: Date;
  updated_at: Date;
  personalInfo: PersonalInfoPayload;
  department: DepartmentPayload;
  unit: UserServiceUnitResponseData;
  servicearea: ServiceAreaPayload;
}

export interface UserServiceUnitResponseData {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  patients: number;
  providers: number;
  siteId: string;
  updated_at: Date;
  type: string;
  total_beds: number;
  occupied_beds: number;
  nursing: boolean;
  charts: boolean;
  upload: boolean;
  refer_outpx: boolean;
  referral: boolean;
  consult: boolean;
  radiology: boolean;
  clerking: boolean;
  dental: boolean;
  logs: boolean;
  review: boolean;
  time_of_death: boolean;
  discharge: boolean;
  move_patient: boolean;
  transfer_patient: boolean;
  admit_patient: boolean;
  med_supply: boolean;
  vitals: boolean;
  plan: boolean;
  appointment: boolean;
  lab_test: boolean;
  procedure: boolean;
  note: boolean;
  prescription: boolean;
}

// PAYLOADS
export type SearchRequestPayload = {
  id?: string | undefined;
  search?: string | undefined;
  searchKey?: string | undefined;
  zipCode?: string | undefined;
  hospitalId?: string | undefined;
  siteId?: string | undefined;
  primaryRoleId?: string | undefined;
  personalInfoId?: string | undefined;
  departmentId?: string | undefined;
  serviceAreaId?: string | undefined;
  unitId?: string | undefined;
  staffId?: string | undefined;
  isConsultant?: string | undefined;
  isSpecialist?: string | undefined;
  appointments?: string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
  address?: string | undefined;
  role?: string | undefined;
  range?:
    | {
        from: Date | undefined;
        to: Date | undefined;
      }
    | undefined;
  sortModel?:
    | {
        sort: string;
        colId: string;
      }
    | undefined;
  greaterThan?: number | undefined;
  status?:
    | 'ALL'
    | 'PENDING'
    | 'ACTIVE'
    | 'DEACTIVATED'
    | 'CLOSED'
    | 'ON_LEAVE'
    | 'ON_BREAK'
    | 'SUSPENDED'
    | 'TERMINATED'
    | 'UNAVAILABLE'
    | 'ARCHIVED'
    | 'DISCHARGED'
    | 'DECEASED'
    | 'INPATIENT'
    | 'OUTPATIENT'
    | undefined;
  startRow?: number | undefined;
  endRow?: number | undefined;
};
