import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlinePayments, MdOutlineAdminPanelSettings } from 'react-icons/md'
import { RxDashboard } from "react-icons/rx";
import { GiDoctorFace } from "react-icons/gi";
import { TbFaceMask } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineClipboardList } from 'react-icons/hi'
import Logo from '../../../assets/img/global/logo.png'
import { SidebarItemProps } from "../../../types/common";
import SidebarItems from "../SidebarItems";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const SuperadminSidebar = [
    {
      item: 'Dashboard',
      Icon: <RxDashboard size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/superadmin',
      showSidebar: showSidebar,
    },

    {
      item: 'Doctor',
      Icon: <GiDoctorFace size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/doctor',
      showSidebar: showSidebar,
    },

    {
      item: 'Patient',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Payment',
      Icon: <MdOutlinePayments size={showSidebar ? 40 : 20} fontWeight={40}/>,
      // route: '/patient',
      showSidebar: showSidebar,
      child: [
        {
          item: 'Invoice',
          Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/patient',
          showSidebar: showSidebar,
        },

        {
          item: 'Receipt',
          Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
          route: '/patient',
          showSidebar: showSidebar,
        },
      ]
    },

    {
      item: 'Admin',
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
      item: 'Pharmacy',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Store',
      Icon: <TbFaceMask size={showSidebar ? 40 : 20} fontWeight={40}/>,
      route: '/patient',
      showSidebar: showSidebar,
    },
  ] as SidebarItemProps[]

  return (
    <React.Fragment>
      <aside
        className={`md:h-100 w-screen shrink-0 overflow-x-scroll border-r border-r-custom-gray-100 bg-brand-secondary-background !shadow-lg dark:border-r-ds-dark-400 dark:bg-ds-dark-700 ${
          showSidebar ? "md:w-auto" : "md:w-[13rem]"
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={`sticky top-0 z-50 hidden h-14 shrink-0 flex-row items-center border-b
           bg-brand-secondary-background py-2 px-4 dark:border-b-ds-dark-400 dark:bg-ds-dark-700 md:flex ${showSidebar ? 'justify-center' : 'justify-between'}`}
          >
          <Link to="/superadmin">
            <img
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              // className={`${showSidebar ? 'hidden' : ''}`}
            />
          </Link>

          <button
            className="grid h-5 w-5 cursor-pointer place-items-center rounded-lg border-brand-background p-1 outline-none transition-colors hover:bg-brand-background focus:outline-none dark:border-ds-dark-400 hover:dark:bg-ds-dark-600/50"
            onClick={() => {
              setShowSidebar(!showSidebar)
            }}
          >
            {showSidebar ? (
              <MdKeyboardDoubleArrowRight size={12}/>
            ) : (
              <MdKeyboardDoubleArrowLeft size={12}/>
            )}
          </button>
        </div>

        <div className="mt-2 flex md:flex-col">
          {SuperadminSidebar.length >= 1 && SuperadminSidebar.map((sidebar:SidebarItemProps, idx:number) => {
            return (
              <>
                <SidebarItems item={sidebar?.item} route={sidebar?.route} Icon={sidebar?.Icon} showSidebar={showSidebar} key={idx} child={sidebar?.child ? sidebar?.child : null}/>
              </>
            )
          })}
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Sidebar;