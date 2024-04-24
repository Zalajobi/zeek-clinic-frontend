import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/img/global/logo.png';
import { SidebarItemProps } from '@typeSpec/common';
import SidebarItems from '@layout/SidebarItems';
import { Card, List } from '@material-tailwind/react';
import { SuperAdminSidebarItems } from '@layout/admin';
import { Typography } from '@components/global/dialog/Typography';

const Sidebar = () => {
  const { superAdminSidebar } = SuperAdminSidebarItems();

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
          {/*<hr className="my-2 border-blue-gray-50"/>*/}
        </div>

        <List className="flex py-2 px-4 overflow-hidden md:overflow-y-scroll md:flex-col">
          {superAdminSidebar.length >= 1 &&
            superAdminSidebar.map((sidebar: SidebarItemProps, idx: number) => {
              return (
                <>
                  <SidebarItems
                    item={sidebar?.item}
                    route={sidebar?.route}
                    Icon={sidebar?.Icon}
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
