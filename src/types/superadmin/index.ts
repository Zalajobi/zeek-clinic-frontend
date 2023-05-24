import { ReactNode } from 'react'

export interface SuperadminBaseData {
  id: string
  email: string
  username: string
  phone_number: string
  first_name: string
  last_name: string
  other_name: string
}


export interface GetHospitalResponseData {
  id: string
  name: string
  email: string
  site_count: number,
  phone: string
  address: string
  city: string
  state: string
  country: string
  logo: string
  created_at: string
  updated_at: string
}

export interface HospitalRowData {
  name: string
  email: string
  site_count: number
  phone: string
  address: string
  city: string
  state: string
  country: string
  created_at: string
  action: ReactNode
}