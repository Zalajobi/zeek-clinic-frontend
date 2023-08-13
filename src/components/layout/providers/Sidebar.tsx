import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/global/logo.png';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineAdminPanelSettings,
  MdOutlinePayments,
} from 'react-icons/md';
import { SidebarItemProps } from '../../../types/common';
import { RxDashboard } from 'react-icons/rx';
import { TbFaceMask } from 'react-icons/tb';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import SidebarItems from '../SidebarItems';

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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
          showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
      showSidebar: showSidebar,
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
                    showSidebar={showSidebar}
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
