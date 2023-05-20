import React, {Fragment, ReactNode, useState} from "react"
import Sidebar from "./Sidebar";
import {RxDashboard} from "react-icons/rx";
import {GiDoctorFace} from "react-icons/gi";
import {TbFaceMask} from "react-icons/tb";
import {MdOutlineAdminPanelSettings, MdOutlinePayments} from "react-icons/md";
import {HiOutlineClipboardList} from "react-icons/hi";
import {AiOutlineUserAdd} from "react-icons/ai";
import {SidebarItemProps} from "../../../types/common";

const ProviderBaseTemplate = ({children}: {children : ReactNode}) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const SuperadminSidebar = [
    {
      item: 'Dashboard',
      Icon: <RxDashboard size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/superadmin',
      showSidebar: showSidebar,
    },

    {
      item: 'Patients',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Laboratory',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Radiology',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Message',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Drug',
      Icon: <MdOutlinePayments size={showSidebar ? 40 : 20} fontWeight={40}/>,
      // route: '/patient',
      showSidebar: showSidebar,
      child: [
        {
          item: 'Store',
          Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/patient',
          showSidebar: showSidebar,
        },

        {
          item: 'Orders',
          Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/patient',
          showSidebar: showSidebar,
        },
      ]

    },

    {
      item: 'Medical Supply Store',
      Icon: <MdOutlineAdminPanelSettings size={showSidebar ? 40 : 20} fontWeight={40}/>,
      showSidebar: showSidebar,
      child: [
        {
          item: 'View',
          Icon: <HiOutlineClipboardList size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/superadmin',
          showSidebar: showSidebar,
        },

        {
          item: 'Create',
          Icon: <AiOutlineUserAdd size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/superadmin/create/new_admin',
          showSidebar: showSidebar,
        },
      ]
    },

    {
      item: 'History',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Appointment',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },
  ] as SidebarItemProps[]

  return (
    <Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-white text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar/>

        {children}
      </div>
    </Fragment>
  )
}

export default ProviderBaseTemplate