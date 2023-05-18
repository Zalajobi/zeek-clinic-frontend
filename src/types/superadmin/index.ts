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