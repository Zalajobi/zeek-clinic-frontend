import React from "react";

export interface SidebarItemProps {
  item: string
  Icon: React.ReactNode
  route?: string
  showSidebar?: boolean
  child?: ChildSidebarItemProps[] | null
}


interface ChildSidebarItemProps {
  item: string
  Icon: React.ReactNode
  route?: string
  showSidebar?: boolean
}

export interface SuperadminBaseData {
  id: string
  email: string
  username: string
  phone_number: string
  first_name: string
  last_name: string
  other_name: string
}