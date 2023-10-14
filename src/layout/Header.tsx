import { Fragment, useState } from 'react';
import {
  Avatar,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import { FaUserAstronaut } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiLockPasswordLine, RiLogoutBoxLine } from 'react-icons/ri';
import { BiCaretDown } from 'react-icons/bi';
import MaleUserIcon from '@assets/img/global/male-user-iconn.png';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { Typography as CustomTypography } from '@components/global/dialog/Typography';

interface HeaderProps {
  name: string;
  query: string;
  role: string;
  handleSearch: (event: string) => void;
}

const Header = ({ name, query, role, handleSearch }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const profileMenuItems = [
    {
      label: 'My Profile',
      icon: (
        <FaUserAstronaut
          size={30}
          className={`mr-3 h-4 w-4`}
          strokeWidth={2}
        />
      ),
    },

    {
      label: 'Inbox',
      icon: (
        <TiMessages
          size={30}
          className={`mr-3 h-4 w-4`}
          strokeWidth={2}
        />
      ),
    },

    {
      label: 'Reset Password',
      icon: (
        <RiLockPasswordLine
          size={30}
          className={`mr-3 h-4 w-4`}
          strokeWidth={2}
        />
      ),
    },

    {
      label: 'Sign Out',
      icon: (
        <RiLogoutBoxLine
          size={30}
          className={`mr-3 h-4 w-4 text-red-500`}
          strokeWidth={2}
        />
      ),
    },
  ];

  return (
    <Fragment>
      <Navbar className="sticky top-0 z-10 h-18 max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div
          className={`flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900`}>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              label="Search..."
              onChange={(event) => handleSearch(event?.target?.value as string)}
              className="pr-20"
              containerProps={{
                className: 'min-w-[288px]',
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>

          <div className={`flex items-center gap-8 ml-auto`}>
            <Menu>
              <MenuHandler>
                <div className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:cursor-pointer">
                  <MdOutlineNotificationsNone size={20} />
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                    20
                  </div>
                </div>
              </MenuHandler>

              <MenuList>
                <MenuItem>
                  <div
                    className={`flex flex-row items-center h-16 px-2 py-2 rounded-lg`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <CustomTypography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div
                    className={`flex flex-row items-center h-16 px-2 py-2 rounded-lg`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <CustomTypography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div
                    className={`flex flex-row items-center h-16 px-2 py-2 rounded-lg`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <CustomTypography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div
                    className={`flex flex-row items-center h-16 px-2 py-2 rounded-lg`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <CustomTypography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div
                    className={`flex flex-row items-center h-16 px-2 py-2 rounded-lg`}>
                    <TiMessages
                      size={20}
                      className={'mr-1'}
                    />

                    <div className="flex flex-col ml-1">
                      <CustomTypography
                        text={`Notification From`}
                        size={`xs`}
                        className={`text-gray-500 leading-[10px]`}
                        weight={400}
                        Tag={`p`}
                      />
                      <p
                        className={`group flex flex-row w-full items-center py-2 text-sm text-justify truncate mx-w-[200px]`}>
                        Contrary to popular belief
                      </p>
                    </div>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              placement="bottom-end">
              <MenuHandler>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
                  <div className="flex items-center gap-4">
                    <Avatar
                      variant="circular"
                      size="sm"
                      alt={name}
                      className="mr-1"
                      src={MaleUserIcon}
                    />

                    <div className={`ml-1`}>
                      <Typography variant="h6">{name}</Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal text-gray-500 leading-[10px]">
                        {role}
                      </Typography>
                    </div>
                  </div>

                  <BiCaretDown
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${
                      isMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                  const isLastItem = key === profileMenuItems.length - 1;
                  return (
                    <MenuItem
                      key={label}
                      onClick={closeMenu}
                      className={`flex items-center gap-2 rounded ${
                        isLastItem
                          ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                          : ''
                      }`}>
                      {icon}
                      <Typography
                        as="span"
                        variant="small"
                        className="font-normal"
                        color={isLastItem ? 'red' : 'inherit'}>
                        {label}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Header;
