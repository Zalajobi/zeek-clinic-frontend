export interface AdminCreateProviderApiDataChildObject {
  name: string;
  id: string;
}

export interface AdminCreateProviderResponseData {
  departments: AdminCreateProviderApiDataChildObject[];
  roles: AdminCreateProviderApiDataChildObject[];
  serviceAreas: AdminCreateProviderApiDataChildObject[];
  units: AdminCreateProviderApiDataChildObject[];
}

export interface AccountServiceApiResponse {
  data: any;
  message: string;
  success: boolean;
}
