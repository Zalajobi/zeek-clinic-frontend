import * as yup from 'yup';

export type AdminEditPersonalInformation = {
  phone: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  title: string;
  dob: string;
  country: string;
  state: string;
};

export const AdminEditPersonalInformationSchema = yup
  .object({
    phone: yup.number(),
    first_name: yup
      .string()
      .min(3, 'Min Three(3) Characters')
      .max(30, 'Max Thirty(30) Characters'),
    last_name: yup
      .string()
      .min(3, 'Min Three(3) Characters')
      .max(30, 'Max Thirty(30) Characters'),
    middle_name: yup
      .string()
      .min(3, 'Min Three(3) Characters')
      .max(30, 'Max Thirty(30) Characters'),
    title: yup.string(),
    dob: yup.string(),
    country: yup.string(),
    state: yup.string(),
  })
  .required();
