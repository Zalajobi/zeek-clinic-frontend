import { UserServiceRoleResponseData } from './admin';

export interface AdminCreateProviderResponseData {
  departments: UserServiceRoleResponseData[];
  roles: UserServiceRoleResponseData[];
  serviceAreas: UserServiceRoleResponseData[];
  units: UserServiceRoleResponseData[];
}

export type AccountServiceApiResponse = {
  data: any;
  message: string;
  success: boolean;
};
