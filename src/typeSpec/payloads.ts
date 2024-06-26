// API Request Payloads
export interface HospitalPayload {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  logo: string;
  zipCode: string;
  id: string;
  siteCount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface SitePayload {
  address?: string;
  name?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  logo?: string;
  phone?: string;
  countryCode?: string;
  zipCode?: string;
  is_private?: boolean;
  has_appointment?: boolean;
  has_caregiver?: boolean;
  has_clinical?: boolean;
  has_doctor?: boolean;
  has_emergency?: boolean;
  has_laboratory?: boolean;
  has_medical_supply?: boolean;
  has_nursing?: boolean;
  has_inpatient?: boolean;
  has_outpatient?: boolean;
  has_pharmacy?: boolean;
  has_physical_therapy?: boolean;
  has_procedure?: boolean;
  has_radiology?: boolean;
  has_unit?: boolean;
  has_vital?: boolean;
  has_wallet?: boolean;
  hospitalId?: string;
  id?: string;
  status?: 'ACTIVE' | 'CLOSED' | 'PENDING' | 'DEACTIVATED';
  createdAt?: string;
  updatedAt?: string;
}

// Department Payload
export interface DepartmentPayload {
  createdAt: string;
  description: string;
  id: string;
  name: string;
  siteId: string;
  updatedAt: string;
  providerCount: string;
  patientCount: string;
}

// Unit Payload
export interface UnitPayload {
  id: string;
  name: string;
  description: string;
  siteId: string;
  totalBeds: number;
  occupiedBeds: number;
  createdAt: string;
  updatedAt: string;
  providerCount: string;
  patientCount: string;
}

// Role Payload
export interface RolesPayload {
  description: string;
  name?: string;
  siteId?: string;
  prescription?: boolean;
  note?: boolean;
  procedure?: boolean;
  lab_test?: boolean;
  appointment?: boolean;
  vitals?: boolean;
  med_supply?: boolean;
  admit_patient?: boolean;
  transfer_patient?: boolean;
  move_patient?: boolean;
  discharge?: boolean;
  time_of_death?: boolean;
  review?: boolean;
  logs?: boolean;
  dental?: boolean;
  clerking?: boolean;
  radiology?: boolean;
  consult?: boolean;
  referral?: boolean;
  refer_outpx?: boolean;
  upload?: boolean;
  charts?: boolean;
  nursing?: boolean;
  plan?: boolean;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ServiceAreaPayload {
  id: string;
  name: string;
  description: string;
  siteId: string;
  createdAt: string;
  updatedAt: string;
  providerCount: string;
  patientCount: string;
  type: string;
}

export interface PersonalInfoPayload {
  phone?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  title?: string;
  gender?: string;
  dob?: Date;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  address_two?: string;
  profile_pic?: string;
  id?: string;
  zip_code?: string;
  religion?: string;
  marital_status?: string;
  createdAt?: string;
}

export interface RolePayload {
  id?: string;
  name?: string;
  description?: string;
}

export interface ProviderPayload {
  id: string;
  siteId: string;
  primaryRoleId: string;
  departmentId: string;
  serviceAreaId: string;
  unitId: string;
  appointments: boolean;
  status:
    | 'ACTIVE'
    | 'PENDING'
    | 'ON_LEAVE'
    | 'ON_BREAK'
    | 'SUSPENDED'
    | 'TERMINATED'
    | 'UNAVAILABLE';
  staffId: string;
  phone: string;
  firstName: string;
  lastName: string;
  middleName: string;
  title: string;
  gender: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  zipCode: string;
  religion: string;
  maritalStatus:
    | 'SINGLE'
    | 'IN_A_RELATIONSHIP'
    | 'ENGAGED'
    | 'MARRIED'
    | 'DIVORCED'
    | 'WIDOWED'
    | 'SEPARATED'
    | 'COMPLICATED'
    | 'OPEN_RELATIONSHIP'
    | 'CIVIL_UNION'
    | 'DOMESTIC_PARTNERSHIP'
    | 'OTHERS';
  profilePic: string;
  isConsultant: string;
  isSpecialist: string;
  email: string;
  role: string;
  dept: string;
  area: string;
  unit: string;
  createdAt: string;
}

export interface AdminPayload {
  siteId: string;
  role: string;
  email: string;
  staffId: string;
  title: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
  alternateAddress: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  zipCode: string;
  profilePic?: string;
  religion: string;
  maritalStatus: string;
  id: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface PatientPayload {
  email: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  siteId: string;
  status: string;
  phone: string;
  dob: string;
  city: string;
  state: string;
  countryCode: string;
  religion: string;
  maritalStatus: string;
  zipCode: string;
  cardNumber: string;
  title: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  address: string;
  alternateAddress: string;
  country: string;
  profilePic: string;
  employerId: string;
  companyName: string;
  departmentId: string;
  departmentName: string;
  serviceAreaId: string;
  serviceAreaName: string;
  unitId: string;
  unitName: string;
  providerId: string;
  providerTitle: string;
  providerFirstName: string;
  providerLastName: string;
}

export interface CountDataPayload {
  date?: string;
  name?: string;
  count: string | number;
}
