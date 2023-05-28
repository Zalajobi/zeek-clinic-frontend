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
  status: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED'
}

export interface HospitalRowData {
  checkbox: ReactNode
  name: ReactNode
  email: ReactNode
  site_count: ReactNode
  phone: ReactNode
  address: ReactNode
  city: ReactNode
  state: ReactNode
  country: ReactNode
  created_at: ReactNode
  action: ReactNode
}