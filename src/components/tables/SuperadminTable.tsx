import {GetHospitalResponseData, HospitalRowData} from "../../types/superadmin";
// import { ColumnDef } from "@tanstack/react-table"

export const SuperadminHospitalColumn = () => {

}

export const SuperadminHospitalRow = (data:GetHospitalResponseData[]) => {
  const rowItems:HospitalRowData[] = []

  data?.map((item:GetHospitalResponseData, idx:number) => {
    rowItems.push({
      name: item?.name,
      email: item?.email,
      site_count: item?.site_count,
      phone: item?.phone,
      address: item?.address,
      city: item?.city,
      state: item?.state,
      country: item?.country,
      created_at: item?.created_at,
      action: <button>item?.id</button>
    })
  })

  return rowItems
}