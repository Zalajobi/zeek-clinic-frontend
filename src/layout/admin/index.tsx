import { TbFaceMask, TbMessageCircle2Filled } from 'react-icons/tb';
import {
  MdDashboard,
  MdLocalActivity,
  MdOutlineAdminPanelSettings,
  MdOutlinePayments,
  MdReport,
} from 'react-icons/md';
import {
  FaUserFriends,
  FaUserInjured,
  FaUserMd,
  FaHospitalUser,
  FaCalendarDay,
  FaUserPlus,
} from 'react-icons/fa';
import { GrOrganization } from 'react-icons/gr';
import { GiDoctorFace } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useState } from 'react';
import { RiCommunityFill, RiShieldUserFill } from 'react-icons/ri';
import { BsFillPieChartFill } from 'react-icons/bs';
import { SidebarItemProps } from '@typeSpec/common';

export const AdminSideBarItems = (showSidebar: boolean, siteId: string) => {
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  if (localStorage.getItem('role') === 'HUMAN_RESOURCES')
    return [
      {
        item: 'Dashboard',
        Icon: (
          <MdDashboard
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
          />
        ),
        // route: '/patient',
        showSidebar: showSidebar,
      },

      {
        item: 'Roles',
        Icon: (
          <RiShieldUserFill
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
          />
        ),
        route: `/admin/roles/${adminData?.siteId as string}`,
        showSidebar: showSidebar,
      },

      {
        item: 'Departments',
        Icon: (
          <FaHospitalUser
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
          />
        ),
        route: `/admin/departments/${adminData?.siteId as string}`,
        showSidebar: showSidebar,
      },
      {
        item: 'Units',
        Icon: (
          <RiCommunityFill
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
          />
        ),
        route: `/admin/units/${adminData?.siteId as string}`,
        showSidebar: showSidebar,
      },

      {
        item: 'Service Area',
        Icon: (
          <BsFillPieChartFill
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
          />
        ),
        route: `/admin/service-area/${adminData?.siteId as string}`,
        showSidebar: showSidebar,
      },

      {
        item: 'Inbox',
        Icon: (
          <TbMessageCircle2Filled
            size={30}
            fontWeight={40}
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
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
            className={`text-gray-500`}
          />
        ),
        route: '#',
        showSidebar: showSidebar,
      },
    ] as SidebarItemProps[];

  return [] as SidebarItemProps[];
};

export const SuperAdminSidebarItems = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const superAdminSidebar = [
    {
      item: 'Dashboard',
      Icon: (
        <MdDashboard
          size={30}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/superadmin',
      showSidebar: showSidebar,
    },

    {
      item: 'Organisation',
      Icon: (
        <GrOrganization
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/superadmin/organisations',
      showSidebar: showSidebar,
    },

    {
      item: 'Doctor',
      Icon: (
        <GiDoctorFace
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/doctor',
      showSidebar: showSidebar,
    },

    {
      item: 'Patient',
      Icon: (
        <TbFaceMask
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Payment',
      Icon: (
        <MdOutlinePayments
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      // route: '/patient',
      showSidebar: showSidebar,
      child: [
        {
          item: 'Invoice',
          Icon: (
            <TbFaceMask
              size={40}
              fontWeight={40}
              className={`text-gray-500`}
            />
          ),
          route: '/patient',
          showSidebar: showSidebar,
        },

        {
          item: 'Receipt',
          Icon: (
            <TbFaceMask
              size={40}
              fontWeight={40}
              className={`text-gray-500`}
            />
          ),
          route: '/patient',
          showSidebar: showSidebar,
        },
      ],
    },

    {
      item: 'Admin',
      Icon: (
        <MdOutlineAdminPanelSettings
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      showSidebar: showSidebar,
      child: [
        {
          item: 'View',
          Icon: (
            <HiOutlineClipboardList
              size={40}
              fontWeight={40}
              className={`text-gray-500`}
            />
          ),
          route: '/superadmin',
          showSidebar: showSidebar,
        },

        {
          item: 'Create',
          Icon: (
            <AiOutlineUserAdd
              size={40}
              fontWeight={40}
              className={`text-gray-500`}
            />
          ),
          route: '/superadmin/create/new_admin',
          showSidebar: showSidebar,
        },
      ],
    },

    {
      item: 'Pharmacy',
      Icon: (
        <TbFaceMask
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/patient',
      showSidebar: showSidebar,
    },

    {
      item: 'Store',
      Icon: (
        <TbFaceMask
          size={40}
          fontWeight={40}
          className={`text-gray-500`}
        />
      ),
      route: '/patient',
      showSidebar: showSidebar,
    },
  ] as SidebarItemProps[];

  return {
    superAdminSidebar,
    showSidebar,

    setShowSidebar,
  };
};
