export type AllCountries = {
  currency: string;
  flag: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
  phonecode: string;
  timezones: TimeZones[];
};

export type TimeZones = {
  abbreviation: string;
  gmtOffset: number;
  gmtOffsetName: string;
  tzName: string;
  zoneName: string;
};

// Create Patient
export type CreatePatientInput = {
  email: string;
  siteId: string;
  departmentId: string;
  serviceAreaId: string;
  unitId: string;
  providerId: string;
  phone: string;
  firstName: string;
  lastName: string;
  middleName: string;
  title: string;
  gender: string;
  dob: string;
  address: string;
  alternateAddress?: string;
  city: string;
  state: string;
  religion: string;
  country: string;
  countryCode: string;
  cardNumber: string;
  zipCode: string;
  profilePic: string;
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
};

// Create Provider
export type CreateProviderInput = {
  title: string;
  siteId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  phone: string;
  gender: string;
  dob: Date | string;
  address: string;
  alternateAddress?: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  zipCode: string;
  profilePic?: string;
  religion: string;
  staffId: string;
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
  departmentId: string;
  roleId: string;
  serviceAreaId: string;
  unitId: string;
  isConsultant: boolean;
  isSpecialist: boolean;
  appointments: boolean;
};

// Create Admin
export type CreateAdminUserInput = {
  siteId: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  username: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  countryCode?: string;
  zipCode: string;
  role: string;
  staffId: string;
  religion: string;
  gender: string;
  dob: string;
  title: string;
  address: string;
  alternateAddress?: string;
  profilePic?: string;
  maritalStatus: string;
};

// Create Organization
export type CreateHospitalInput = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  // log: string;
  zipCode: string;
};

// Create Site
export type CreateSiteInput = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  hospital_id: string;
  zipCode: string;
  logo: string;
  is_private: boolean;
  has_appointment: boolean;
  has_caregiver: boolean;
  has_clinical: boolean;
  has_doctor: boolean;
  has_emergency: boolean;
  has_laboratory: boolean;
  has_medical_supply: boolean;
  has_nursing: boolean;
  has_inpatient: boolean;
  has_outpatient: boolean;
  has_pharmacy: boolean;
  has_physical_therapy: boolean;
  has_procedure: boolean;
  has_radiology: boolean;
  has_unit: boolean;
  has_vital: boolean;
  has_wallet: boolean;
};

// Create Department
export type CreateDepartmentInput = {
  name: string;
  description: string;
  siteId: string;
};

// Create Unit
export type CreateUnitInput = {
  name: string;
  description: string;
  totalBeds: number;
  siteId: string;
};

// Create Service Area
export type CreateServiceAreaInput = {
  siteId: string;
  name: string;
  type: 'OUTPATIENT' | 'INPATIENT' | 'PROCEDURE' | 'EMERGENCY' | 'OTHERS';
  description: string;
};

// Create Role
export type CreateRoleInput = {
  description: string;
  name: string;
  siteId: string;
  prescription: boolean;
  note: boolean;
  procedure: boolean;
  lab_test: boolean;
  appointment: boolean;
  vitals: boolean;
  med_supply: boolean;
  admit_patient: boolean;
  transfer_patient: boolean;
  move_patient: boolean;
  discharge: boolean;
  time_of_death: boolean;
  review: boolean;
  logs: boolean;
  dental: boolean;
  clerking: boolean;
  radiology: boolean;
  consult: boolean;
  referral: boolean;
  refer_outpx: boolean;
  upload: boolean;
  charts: boolean;
  nursing: boolean;
  plan: boolean;
};
