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

export type AllStatesAndCities = {
  name: string;
  isoCode: string;
  country_code: string;
  stateCode: string;
  latitude: string;
  longitude: string;
};

export type TimeZones = {
  abbreviation: string;
  gmtOffset: number;
  gmtOffsetName: string;
  tzName: string;
  zoneName: string;
};

// Create Provider
export type CreateProviderInput = {
  title: string;
  first_name: string;
  last_name: string;
  middle_name?: string;
  gender: string;
  dob?: Date;
  email: string;
  phone: string;
  department: string;
  role: string;
  serviceArea: string;
  unit: string;
  country: string;
  country_code?: string;
  state: string;
  city: string;
  staff_id: string;
  zip_code: string;
  marital_status:
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
  religion: string;
  password?: string;
  username?: string;
  address: string;
  address_two: string;
  siteId: string;
  is_consultant: boolean;
  is_specialist: boolean;
  appointments: boolean;
  profile_pic?: string;
};

// Create Admin
export type CreateAdminUserInput = {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  username: string;
  country: string;
  state: string;
  city: string;
  phone: string;
  country_code?: string;
  zip_code: string;
  role: string;
  staff_id: string;
  // department: string;
  religion?: string;
  gender: string;
  dob: string;
  title: string;
  // bio?: string;
  address: string;
  address_two?: string;
  profile_img?: string;
  marital_status?: string;
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
  siteId: string;
};
