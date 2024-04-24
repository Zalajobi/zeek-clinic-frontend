import { Fragment } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { Input, Navbar } from '@material-tailwind/react';
import {
  HiCog6Tooth,
  HiInboxArrowDown,
  HiLifebuoy,
  HiPower,
} from 'react-icons/hi2';
import ProfileMenu from '@components/global/ProfileMenu';
import { Typography } from '@components/global/dialog/Typography';

interface HeaderProps {
  name: string;
  query: string;
  role: string;
  handleSearch: (event: string) => void;
  profilePic?: string;
}

const Header = ({
  name,
  query,
  role,
  handleSearch,
  profilePic,
}: HeaderProps) => {
  const profileMenuItems = [
    {
      label: 'My Profile',
      icon: HiUserCircle,
      to: '#',
    },

    {
      label: 'Edit Profile',
      icon: HiCog6Tooth,
      to: '#',
    },

    {
      label: 'Inbox',
      icon: HiInboxArrowDown,
      to: '#',
    },

    {
      label: 'Help',
      icon: HiLifebuoy,
      to: '#',
    },

    {
      label: 'Sign Out',
      icon: RiLogoutBoxLine,
      to: '#',
    },
  ];

  return (
    <Fragment>
      <Navbar
        className={`flex sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4`}>
        <div className="relative flex w-full gap-2">
          <Input
            type="text"
            placeholder="Search"
            className="!border !w-[200px] !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!w-[220px]"
            labelProps={{
              className: 'hidden',
            }}
            containerProps={{ className: 'min-w-[100px]' }}
          />
        </div>

        <div className={`flex flex-row`}>
          <div
            className={`mx-2 min-w-[100px] max-w-[200px] items-center justify-center px-2`}>
            <Typography
              text={name}
              Tag={'p'}
              className={`text-xs font-medium text-right !truncate`}
            />

            <Typography
              text={role}
              Tag={'h6'}
              className={`font-semibold text-sm text-right !truncate`}
            />
          </div>

          <ProfileMenu
            profileImg={
              profilePic ??
              '<ProfileMenu  profileImg={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80`} menuItems={profileMenuItems}/>'
            }
            menuItems={profileMenuItems}
          />
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Header;
