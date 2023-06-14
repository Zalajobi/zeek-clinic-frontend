import { ReactNode } from "react";

export type S3UploadResponse = {
  Location: string,
  Key: string,
  Bucket: string
}

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