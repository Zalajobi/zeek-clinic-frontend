import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/global/logo.png';
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { SidebarItemProps } from '../../../types/common';
import SidebarItems from '../SidebarItems';
import { AdminSideBarItems } from './index';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const sidebarItems = AdminSideBarItems(showSidebar);

  return (
    <Fragment>
      <aside
        className={`md:h-100 w-screen shrink-0 overflow-x-scroll bg-white !shadow-lg dark:border-r-ds-dark-400 dark:bg-ds-dark-700 ${
          showSidebar ? 'md:w-auto' : 'md:w-[13rem]'
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={`sticky top-0 z-50 hidden flex items-center bg-white py-2 px-4 justify-center h-20 shadow-md md:flex ${
            showSidebar ? 'justify-center' : 'justify-between'
          }`}>
          <Link to="/admin">
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

        <ul className="flex py-4 overflow-hidden     md:flex-col">
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
        </ul>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
