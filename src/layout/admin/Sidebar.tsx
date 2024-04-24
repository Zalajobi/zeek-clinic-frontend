import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/img/global/logo.png';
import { SidebarItemProps } from '@typeSpec/common';
import SidebarItems from '@layout/SidebarItems';
import { AdminSideBarItems } from '@layout/admin';
import { Card, List } from '@material-tailwind/react';
import { Typography } from '@components/global/dialog/Typography';

const Sidebar = ({ siteId }: { siteId: string }) => {
  const [showSidebar] = useState(false);

  const sidebarItems = AdminSideBarItems(showSidebar, siteId);

  return (
    <Fragment>
      <Card
        className={`w-full max-w-[20rem] rounded-none py-4 shadow-xl shadow-blue-gray-900/5 overflow-x-scroll md:w-[15rem] md:overflow-y-scroll`}>
        <div className="mb-2 p-4">
          <Typography
            iconBefore={
              <Link to="/admin">
                <img
                  src={Logo}
                  alt="Brand Logo"
                  className="h-8 w-8 mr-2"
                  width={40}
                  height={40}
                />
              </Link>
            }
            Tag={`h2`}
            text={`Dashboard`}
            className={`flex items-center justify-start !text-[25px]`}
          />
        </div>

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
