import { UserServiceUnitResponseData } from '@typeSpec/index';
import {
  DepartmentPayload,
  RolePayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';

export interface AdminCreateProviderResponseData {
  departments: DepartmentPayload[];
  roles: RolePayload[];
  serviceAreas: ServiceAreaPayload[];
  units: UserServiceUnitResponseData[];
}

export type AccountServiceApiResponse = {
  data: any;
  message: string;
  success: boolean;
};
