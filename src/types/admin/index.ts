export interface AdminHeaderBaseTemplateData {
  role: string;
  personalInfo: AdminHeaderBaseTemplateDataPersonalInfo;
}

export interface AdminHeaderBaseTemplateDataPersonalInfo {
  first_name: string;
  last_name: string;
  dob?: any;
}
