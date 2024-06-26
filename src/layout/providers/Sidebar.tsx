import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineAdminPanelSettings,
  MdOutlinePayments,
} from 'react-icons/md';
import { TbFaceMask } from 'react-icons/tb';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import Logo from '@assets/img/global/logo.png';
import { SidebarItemProps } from '@typeSpec/common';
import SidebarItems from '@layout/SidebarItems';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const providerSidebar = [
    {
      item: 'Dashboard',
      Icon: (
        <RxDashboard
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '/care',
    },

    {
      item: 'Patients',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },

    {
      item: 'Notes',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },

    {
      item: 'Laboratory',
      Icon: (
        <MdOutlinePayments
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      // route: '/patient',
      child: [
        {
          item: 'Order Lab',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },

        {
          item: 'Orders',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },
      ],
    },

    {
      item: 'Message',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },

    {
      item: 'Radiology',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      // route: '/patient',

      child: [
        {
          item: 'Create Order',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },

        {
          item: 'Orders',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },
      ],
    },

    {
      item: 'Drug',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      // route: '/patient',

      child: [
        {
          item: 'Store',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },

        {
          item: 'Orders',
          Icon: (
            <TbFaceMask
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },
      ],
    },

    {
      item: 'Medical Store',
      Icon: (
        <MdOutlineAdminPanelSettings
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),

      child: [
        {
          item: 'Store',
          Icon: (
            <HiOutlineClipboardList
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },

        {
          item: 'Create',
          Icon: (
            <AiOutlineUserAdd
              size={showSidebar ? 40 : 20}
              fontWeight={40}
              color={`black`}
            />
          ),
          route: '#',
        },
      ],
    },

    {
      item: 'History',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },

    {
      item: 'Appointment',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },

    {
      item: 'Profile',
      Icon: (
        <TbFaceMask
          size={showSidebar ? 40 : 20}
          fontWeight={40}
          color={`black`}
        />
      ),
      route: '#',
    },
  ] as SidebarItemProps[];

  return (
    <Fragment>
      <aside
        className={`md:h-100 w-screen shrink-0 overflow-x-scroll border-r border-r-custom-gray-100 bg-brand-secondary-background !shadow-lg dark:border-r-ds-dark-400 dark:bg-ds-dark-700 ${
          showSidebar ? 'md:w-auto' : 'md:w-[13rem]'
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={`sticky top-0 z-50 hidden h-14 shrink-0 flex-row items-center border-b
           bg-brand-secondary-background py-2 px-4 dark:border-b-ds-dark-400 dark:bg-ds-dark-700 md:flex ${
             showSidebar ? 'justify-center' : 'justify-between'
           }`}>
          <Link to="/care">
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
              setShowSidebar(!showSidebar);
            }}>
            {showSidebar ? (
              <MdKeyboardDoubleArrowRight size={12} />
            ) : (
              <MdKeyboardDoubleArrowLeft size={12} />
            )}
          </button>
        </div>

        <div className="mt-2 flex md:flex-col">
          {providerSidebar.length >= 1 &&
            providerSidebar.map((sidebar: SidebarItemProps, idx: number) => {
              return (
                <>
                  <SidebarItems
                    item={sidebar?.item}
                    route={sidebar?.route}
                    Icon={sidebar?.Icon}
                    key={idx}
                    child={sidebar?.child ? sidebar?.child : null}
                  />
                </>
              );
            })}
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
