export interface UserServicePatientDetailsResponse {
  siteId: string;
  email: string;
  status: string;
  id: string;
  created_at: Date;
  updated_at: Date;
  personalInfo: UserServicePersonalInfoResponseData;
  department: UserServiceDepartmentResponseData;
  unit: UserServiceUnitResponseData;
  servicearea: UserServiceServiceAreaResponseData;
}

export interface UserServiceDepartmentResponseData {
  id: string;
  name: string;
  description: string;
}

export interface UserServiceUnitResponseData {
  created_at: Date;
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

export interface UserServicePersonalInfoResponseData {
  phone: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  title: string;
  gender: string;
  dob: Date;
  country: string;
  state: string;
  city: string;
  address: string;
  address_two?: string;
  profile_pic: string;
  id: string;
  zip_code: string;
  religion: string;
  marital_status: string;
  created_at: string;
}

// PAYLOADS
export type SearchSitesRequestPayload = {
  id?: string | undefined;
  search?: string | undefined;
  searchKey?: string | undefined;
  zipCode?: string | undefined;
  hospitalId?: string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
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
  status?: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED' | 'CLOSED' | undefined;
  startRow?: number | undefined;
  endRow?: number | undefined;
};
