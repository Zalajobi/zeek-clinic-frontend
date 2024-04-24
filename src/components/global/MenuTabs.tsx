import { createElement, Fragment, ReactNode, useState } from 'react';
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

interface ProfileMenuProps {
  menuItems: {
    label: string;
    icon: any;
    to: string;
  }[];
  profileImg?: string;
}

interface CustomTabHeaderProps {
  tabItems: {
    label: string;
    value: string;
    icon?: any;
  }[];
  onClick: (value: any) => void;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
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

export const CustomTabHeader = ({
  tabItems,
  onClick,
  orientation = 'horizontal',
  className,
}: CustomTabHeaderProps) => {
  return (
    <Fragment>
      <Tabs
        value={tabItems[0].value}
        orientation={orientation}
        className={`w-full rounded-lg md:w-max bg-gray-300 ${className}`}>
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
