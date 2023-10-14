import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import Logo from '@assets/img/global/logo.png';
import { SidebarItemProps } from '@typeSpec/common';
import SidebarItems from '@layout/SidebarItems';
import { AdminSideBarItems } from '@layout/admin';
import { Card, List } from '@material-tailwind/react';

const Sidebar = ({ siteId }: { siteId: string }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarItems = AdminSideBarItems(showSidebar, siteId);

  return (
    <Fragment>
      <Card
        className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] py-4 shadow-xl shadow-blue-gray-900/5 overflow-x-scroll ${
          showSidebar ? 'md:w-auto' : 'md:w-[13rem]'
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={`sticky top-0 z-50 hidden flex items-center bg-white px-4 justify-center h-20 md:flex ${
            showSidebar ? 'justify-center' : 'justify-between'
          }`}>
          <div className="mb-2 flex items-center gap-4 p-4">
            <Link to="/admin">
              <img
                src={Logo}
                alt="Brand Logo"
                className="h-8 w-8"
                width={40}
                height={40}
              />
            </Link>
          </div>

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

        <hr className="my-2 border-blue-gray-50" />

        <List className="flex py-2 px-4 overflow-hidden md:overflow-y-scroll md:flex-col">
          {sidebarItems.length >= 1 &&
            sidebarItems.map((sidebar: SidebarItemProps, idx: number) => {
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
        </List>
      </Card>
    </Fragment>
  );
};

export default Sidebar;
