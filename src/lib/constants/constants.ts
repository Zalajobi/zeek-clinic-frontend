import { SelectInputFieldProps } from '../../types/common';

export const matchLowerCaseRegex = /[a-z]/g;
export const matchUpperCaseRegex = /[A-Z]/g;
export const matchNumbersRegex = /[0-9]/g;

export const availableTitles = [
  'Dr.',
  'Esq.',
  'Hon.',
  'Jr.',
  'Mr.',
  'Mrs.',
  'Ms.',
  'Messrs.',
  'Mmes.',
  'Msgr.',
  'Prof.',
  'Rev.',
  'Rt.',
  'Sr.',
  'St.',
];

export const providersTitleSelectInput: SelectInputFieldProps[] = [
  {
    value: 'Mr.',
    placeholder: 'Mr.',
  },

  {
    value: 'Mrs.',
    placeholder: 'Mrs.',
  },

  {
    value: 'Miss.',
    placeholder: 'Miss.',
  },

  {
    value: 'Dr.',
    placeholder: 'Dr.',
  },

  {
    value: 'Rn.',
    placeholder: 'Rn.',
  },

  {
    value: 'Lpn.',
    placeholder: 'Lpn.',
  },

  {
    value: 'Pa.',
    placeholder: 'Pa.',
  },

  {
    value: 'Np.',
    placeholder: 'Np.',
  },

  {
    value: 'Ot.',
    placeholder: 'Ot.',
  },

  {
    value: 'Pt.',
    placeholder: 'Pt.',
  },

  {
    value: 'Slp.',
    placeholder: 'Slp.',
  },

  {
    value: 'Sw.',
    placeholder: 'Sw.',
  },
];

export const genderSelectInput: SelectInputFieldProps[] = [
  {
    value: 'Male',
    placeholder: 'Male',
  },

  {
    value: 'Female',
    placeholder: 'Female',
  },

  {
    value: 'Others',
    placeholder: 'Others',
  },
];
