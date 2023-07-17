import { RxDashboard } from 'react-icons/rx';
import { TbFaceMask } from 'react-icons/tb';
import { MdOutlineAdminPanelSettings, MdOutlinePayments } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { SidebarItemProps } from '../../../types/common';

export const AdminSideBarItems = (showSidebar: boolean) => {
  if (localStorage.getItem('role') === 'HUMAN_RESOURCES')
    return [
      {
        item: 'Dashboard',
        Icon: (
          <RxDashboard
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '/admin',
        showSidebar: showSidebar,
      },

      {
        item: 'Patients',
        Icon: (
          <TbFaceMask
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Notes',
        Icon: (
          <TbFaceMask
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Laboratory',
        Icon: (
          <MdOutlinePayments
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
        child: [
          {
            item: 'Order Lab',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
              />
            ),
            route: '#',
            showSidebar: showSidebar,
          },

          {
            item: 'Orders',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
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
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Radiology',
        Icon: (
          <TbFaceMask
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
        child: [
          {
            item: 'Create Order',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
              />
            ),
            route: '#',
            showSidebar: showSidebar,
          },

          {
            item: 'Orders',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
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
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
        child: [
          {
            item: 'Store',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
              />
            ),
            route: '#',
            showSidebar: showSidebar,
          },

          {
            item: 'Orders',
            Icon: (
              <TbFaceMask
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
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
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        showSidebar: showSidebar,
        child: [
          {
            item: 'Store',
            Icon: (
              <HiOutlineClipboardList
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
              />
            ),
            route: '#',
            showSidebar: showSidebar,
          },

          {
            item: 'Create',
            Icon: (
              <AiOutlineUserAdd
                size={30}
                fontWeight={40}
                className={`text-gray-500 hover:text-gray-800`}
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
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Appointment',
        Icon: (
          <TbFaceMask
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Profile',
        Icon: (
          <TbFaceMask
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },
    ] as SidebarItemProps[];

  return [] as SidebarItemProps[];
};
