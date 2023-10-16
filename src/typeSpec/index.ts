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
  total_beds: number;
  occupied_beds: number;
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
  profile_pic: string;
  id: string;
}
