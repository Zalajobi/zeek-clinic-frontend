import { TbFaceMask, TbMessageCircle2Filled } from 'react-icons/tb';
import { MdDashboard, MdLocalActivity, MdReport } from 'react-icons/md';
import {
  FaUserFriends,
  FaUserInjured,
  // FaUserNurse,
  FaUserMd,
  FaUsersCog,
  FaPaperclip,
  FaHospitalUser,
  FaCalendarDay,
  FaUserPlus,
} from 'react-icons/fa';
import { SidebarItemProps } from '../../../types/common';

export const AdminSideBarItems = (showSidebar: boolean, siteId: string) => {
  if (localStorage.getItem('role') === 'HUMAN_RESOURCES')
    return [
      {
        item: 'Dashboard',
        Icon: (
          <MdDashboard
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '/admin',
        showSidebar: showSidebar,
      },

      {
        item: 'Admin',
        Icon: (
          <FaUserFriends
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: `#`,
        showSidebar: showSidebar,
      },

      {
        item: 'Patients',
        Icon: (
          <FaUserInjured
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: `/admin/patients/${siteId}`,
        showSidebar: showSidebar,
      },

      {
        item: 'Care Provider',
        Icon: (
          <FaUserMd
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: `/admin/providers/${siteId}`,
        showSidebar: showSidebar,
      },

      {
        item: 'Activity',
        Icon: (
          <MdLocalActivity
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },

      {
        item: 'Reports',
        Icon: (
          <MdReport
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
      },

      {
        item: 'Roles',
        Icon: (
          <FaPaperclip
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
      },

      {
        item: 'Departments',
        Icon: (
          <FaHospitalUser
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
      },

      {
        item: 'Inbox',
        Icon: (
          <TbMessageCircle2Filled
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
          <FaCalendarDay
            size={30}
            fontWeight={40}
            className={`text-gray-500 hover:text-gray-800`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
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
        item: 'Profile',
        Icon: (
          <FaUserPlus
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
