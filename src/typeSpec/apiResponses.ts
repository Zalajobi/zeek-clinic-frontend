import {
  UserServiceDepartmentResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';

export interface AdminCreateProviderResponseData {
  departments: UserServiceDepartmentResponseData[];
  roles: UserServiceRoleResponseData[];
  serviceAreas: UserServiceServiceAreaResponseData[];
  units: UserServiceUnitResponseData[];
}

export type AccountServiceApiResponse = {
  data: any;
  message: string;
  success: boolean;
};
