import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@assets/img/global/logo.png';
import { SidebarItemProps } from '@typeSpec/common';
import SidebarItems from '@layout/SidebarItems';
import { Card, List } from '@material-tailwind/react';
import { SuperAdminSidebarItems } from '@layout/admin';
import { Typography } from '@components/global/dialog/Typography';

const Sidebar = () => {
  const { superAdminSidebar } = SuperAdminSidebarItems();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update the orientation based on screen width
    const checkOrientation = () => {
      if (window.innerWidth < 760) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check Orientation on load
    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <Fragment>
      <Card
        className={`w-full max-w-[20rem] rounded-none py-4 shadow-xl shadow-blue-gray-900/5 overflow-x-scroll ${
          isMobile ? 'max-w-[7rem]' : ''
        } md:w-[15rem] md:overflow-y-scroll`}>
        <div className="mb-2 p-4 flex items-center justify-start">
          <Link to="/admin">
            <img
              src={Logo}
              alt="Brand Logo"
              className="h-8 w-8 mr-2"
              width={40}
              height={40}
            />
          </Link>

          <Typography
            Tag={`h2`}
            text={`Dashboard`}
            className={`flex items-center justify-start !text-[25px] ${
              isMobile ? 'hidden' : ''
            }`}
          />
        </div>

        <List className="flex py-2 px-4 overflow-hidden md:overflow-y-scroll md:flex-col">
          {superAdminSidebar.length >= 1 &&
            superAdminSidebar.map((sidebar: SidebarItemProps, idx: number) => {
              return (
                <Fragment key={`${sidebar}_${idx}`}>
                  <SidebarItems
                    item={sidebar?.item}
                    route={sidebar?.route}
                    Icon={sidebar?.Icon}
                    child={sidebar?.child ? sidebar?.child : null}
                  />
                </Fragment>
              );
            })}
        </List>
      </Card>
    </Fragment>
  );
};

export default Sidebar;
