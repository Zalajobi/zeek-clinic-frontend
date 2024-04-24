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
import { RiCommunityFill, RiShieldUserFill } from 'react-icons/ri';
import { BsFillPieChartFill } from 'react-icons/bs';
import { SidebarItemProps } from '@typeSpec/common';

export const AdminSideBarItems = (siteId: string) => {
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  if (localStorage.getItem('role') === 'HUMAN_RESOURCES')
    return [
      {
        item: 'Dashboard',
        Icon: <MdDashboard size={20} />,
        route: '#',
      },

      {
        item: 'Admin',
        Icon: <FaUserFriends size={20} />,
        route: `#`,
      },

      {
        item: 'Patients',
        Icon: <FaUserInjured size={20} />,
        route: `/admin/patients/${siteId}`,
      },

      {
        item: 'Care Provider',
        Icon: <FaUserMd size={20} />,
        route: `/admin/providers/${siteId}`,
      },

      {
        item: 'Activity',
        Icon: <MdLocalActivity size={20} />,
        route: '#',
      },

      {
        item: 'Reports',
        Icon: <MdReport size={20} />,
      },

      {
        item: 'Roles',
        Icon: <RiShieldUserFill size={20} />,
        route: `/admin/roles/${adminData?.siteId as string}`,
      },

      {
        item: 'Departments',
        Icon: <FaHospitalUser size={20} />,
        route: `/admin/departments/${adminData?.siteId as string}`,
      },

      {
        item: 'Units',
        Icon: <RiCommunityFill size={20} />,
        route: `/admin/units/${adminData?.siteId as string}`,
      },

      {
        item: 'Service Area',
        Icon: <BsFillPieChartFill size={20} />,
        route: `/admin/service-area/${adminData?.siteId as string}`,
      },

      {
        item: 'Inbox',
        Icon: <TbMessageCircle2Filled size={20} />,
        route: '#',
      },

      {
        item: 'Appointment',
        Icon: <FaCalendarDay size={20} />,
        // route: '/patient',
      },

      {
        item: 'History',
        Icon: <TbFaceMask size={20} />,
        route: '#',
      },

      {
        item: 'Profile',
        Icon: <FaUserPlus size={20} />,
        route: '#',
      },
    ] as SidebarItemProps[];

  return [] as SidebarItemProps[];
};

export const SuperAdminSidebarItems = () => {
  const superAdminSidebar = [
    {
      item: 'Dashboard',
      Icon: <MdDashboard size={20} />,
      route: '/superadmin',
    },

    {
      item: 'Organisation',
      Icon: <GrOrganization size={20} />,
      route: '/superadmin/organisations',
    },

    {
      item: 'Doctor',
      Icon: <GiDoctorFace size={20} />,
      route: '/doctor',
    },

    {
      item: 'Patient',
      Icon: <TbFaceMask size={20} />,
      route: '/patient',
    },

    {
      item: 'Payment',
      Icon: <MdOutlinePayments size={20} />,
      child: [
        {
          item: 'Invoice',
          Icon: <TbFaceMask size={20} />,
          route: '/patient',
        },

        {
          item: 'Receipt',
          Icon: <TbFaceMask size={20} />,
          route: '/patient',
        },
      ],
    },

    {
      item: 'Admin',
      Icon: <MdOutlineAdminPanelSettings size={20} />,

      child: [
        {
          item: 'View',
          Icon: <HiOutlineClipboardList size={20} />,
          route: '/superadmin',
        },

        {
          item: 'Create',
          Icon: <AiOutlineUserAdd size={20} />,
          route: '/superadmin/create/new_admin',
        },
      ],
    },

    {
      item: 'Pharmacy',
      Icon: <TbFaceMask size={20} />,
      route: '/patient',
    },

    {
      item: 'Store',
      Icon: <TbFaceMask size={20} />,
      route: '/patient',
    },
  ] as SidebarItemProps[];

  return {
    superAdminSidebar,
  };
};
