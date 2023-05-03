import * as yup from 'yup'

export type AllCountries = {
  currency: string
  flag: string
  isoCode: string
  latitude: string
  longitude: string
  name: string
  phonecode: string
  timezones: TimeZones[]
}

export type AllStatesAndCities = {
  name: string
  isoCode: string
  countryCode: string
  stateCode: string
  latitude: string
  longitude: string
}

export type TimeZones = {
  abbreviation: string
  gmtOffset: number
  gmtOffsetName: string
  tzName:string
  zoneName: string
}

export type CreateUserInput = {
  email: string
  firstName: string
  lastName: string
  middleName: string
  username: string
  country: string
  state: string
  city: string
  phoneNumber: string
  countryCode?: string
  zipCode: string
  // role: string
  // gender: string
  // dob: string
  // title: string
  // bio?: string
  // address: string
  // alternateAddress?: string
}

export const CreateUserInputSchema = yup.object({
  email: yup.string().required('Email field is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  middleName: yup.string().optional(),
  username: yup.string().required().min(8, 'Username must be at least 8 characters long'),
  country: yup.string().required('Choose the country you reside in'),
  state: yup.string().required('State is required'),
  city: yup.string().required('Choose the city you reside in'),
  phoneNumber: yup.number().required('Phone number is required'),
  countryCode: yup.string().optional(),
  zipCode: yup.string().required('Zip code is required'),
  // role: yup.string().required('User role must be selected'),
  // gender: yup.string().required('Please choose a valid gender'),
  // dob: yup.string().required('Date of birth is required'),
  // title: yup.string().required('User title is required'),
  // bio: yup.string().optional().min(100, 'Bio requires at least 100 characters'),
  // address: yup.string().required('User address is required').min(10, 'Address too short'),
  // alternateAddress: yup.string().optional().min(10, 'Address too short')
}).required()
