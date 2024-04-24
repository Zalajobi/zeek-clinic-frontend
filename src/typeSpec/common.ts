import { ReactNode } from 'react';

export type S3UploadResponse = {
  Location: string;
  Key: string;
  Bucket: string;
};

export interface SidebarItemProps {
  item: string;
  Icon: ReactNode;
  route?: string;
  child?: ChildSidebarItemProps[] | null;
}

interface ChildSidebarItemProps {
  item: string;
  Icon: ReactNode;
  route?: string;
  showSidebar?: boolean;
}

export interface SelectInputFieldProps {
  value: string;
  placeholder: string;
}
