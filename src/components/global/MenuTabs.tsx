import { createElement, Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tab,
  Tabs,
  TabsHeader,
} from '@material-tailwind/react';
import { Typography } from '@components/global/dialog/Typography';
import { HiChevronDown } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';

interface ProfileMenuProps {
  menuItems: {
    label: string;
    icon: any;
    to: string;
  }[];
  profileImg?: string;
}

interface CustomTabSelectorProps {
  tabItems: {
    label: string;
    value: string;
    icon?: any;
  }[];
  onClick: (value: any) => void;
  className?: string;
}

interface DropDownMenuProps {
  value: string | number;
  menuItems: any[];
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  change: (item: any) => void;
  buttonClass?: string;
}

export const ProfileMenu = ({ menuItems, profileImg }: ProfileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu
      open={isMenuOpen}
      handler={setIsMenuOpen}
      placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={profileImg}
          />
          <HiChevronDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menuItems.map(({ label, icon, to }, key) => {
          const isLastItem = key === menuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu();
                navigate(to);
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : 'hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10'
              }`}>
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 1,
              })}

              <Typography
                Tag={`span`}
                text={label}
                className={`font-normal ${isLastItem ? 'text-red' : 'inherit'}`}
              />
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export const CustomTabSelector = ({
  tabItems,
  onClick,
  className,
}: CustomTabSelectorProps) => {
  const [orientation, setOrientation] = useState('horizontal');

  useEffect(() => {
    // Function to check and update the orientation based on screen width
    const checkOrientation = () => {
      if (window.innerWidth >= 760) {
        setOrientation('horizontal');
      } else {
        setOrientation('vertical');
      }
    };

    // Check Orientation
    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <Fragment>
      <Tabs
        value={tabItems[0].value}
        orientation={orientation}
        className={`w-full md:w-max rounded-lg bg-gray-100 ${
          className ? className : ''
        }`}>
        <TabsHeader>
          {tabItems.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => onClick(value)}
              className={`cursor-pointer`}>
              {icon ? (
                <div className={`flex items-center gap-2`}>
                  {createElement(icon, { className: 'w-5 h-5' })}
                </div>
              ) : (
                <>&nbsp;&nbsp;{label}&nbsp;&nbsp;</>
              )}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
    </Fragment>
  );
};

export const DropdownMenu = ({
  value,
  menuItems,
  placement = 'bottom',
  change,
  buttonClass,
}: DropDownMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Menu
      open={openMenu}
      handler={setOpenMenu}
      animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
      placement={placement}>
      <MenuHandler>
        <Button
          variant={'outlined'}
          className={`flex items-center gap-3 text-base font-normal capitalize tracking-normal justify-center
          ${buttonClass}`}>
          {value}{' '}
          <FaChevronDown
            strokeWidth={2.5}
            className={`h-2.5 w-2.5 transition-transform 
            ${openMenu ? 'rotate-180' : ''}`}
          />
        </Button>
      </MenuHandler>

      <MenuList className={`max-h-72`}>
        {menuItems.map((item) => (
          <MenuItem
            onClick={() => change(item)}
            key={item}
            className={
              'my-2 hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10'
            }>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// export const NotificationsMenu = () => {
//   return (
//     <Menu>
//       <MenuHandler>
//         <IconButton variant="text">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-5 w-5">
//             <path
//               fillRule="evenodd"
//               d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </IconButton>
//       </MenuHandler>
//       <MenuList className="flex flex-col gap-2">
//         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
//           <Avatar
//             variant="circular"
//             alt="tania andrew"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <div className="flex flex-col gap-1">
//             <p>Tania send you a message</p>
//             <p>13 minutes ago</p>
//           </div>
//         </MenuItem>
//         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
//           <Avatar
//             variant="circular"
//             alt="natali craig"
//             src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
//           />
//           <div className="flex flex-col gap-1">
//             <Typography
//               className="font-semibold text-xs"
//               Tag={'p'}
//               text={`Natali replied to your email.`}
//             />
//             <Typography
//               className="font-semibold text-xs"
//               Tag={'p'}
//               text={`Natali replied to your email.`}
//             />
//             <Typography
//               Tag={'p'}
//               text={`1 hour ago`}
//               className="flex items-center gap-1 text-sm font-medium text-blue-gray-500"
//               iconBefore={<FcClock />}
//             />
//           </div>
//         </MenuItem>
//         <MenuItem className="flex items-center gap-4 py-2 pl-2 pr-8">
//           <Avatar
//             variant="circular"
//             alt="paypal"
//             src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
//           />
//           <div className="flex flex-col gap-1">
//             <Typography
//               className="font-semibold"
//               Tag={'p'}
//               text={`You&apos;ve received a payment.`}
//             />
//             <Typography
//               className="font-semibold"
//               Tag={'p'}
//               text={`5 hours ago`}
//             />
//           </div>
//         </MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };
