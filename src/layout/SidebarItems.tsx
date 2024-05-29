import { Fragment, useEffect, useState } from 'react';
import { SidebarItemProps } from '@typeSpec/common';
import { Typography } from '@components/global/dialog/Typography';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const SidebarItems = ({ item, Icon, route, child }: SidebarItemProps) => {
  const [show, setShow] = useState(0);
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

    // Check Orientation on a load
    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const handleOpen = (value: number) => {
    setShow(show === value ? 0 : value);
  };

  return (
    <Fragment>
      {!child ? (
        <Link
          to={route ?? `/admin`}
          className={`py-2 ${isMobile ? 'w-[6rem]' : ''}`}>
          <ListItem>
            <ListItemPrefix>{Icon}</ListItemPrefix>
            <Typography
              className={`text-md font-bold ${isMobile ? 'hidden' : 'flex'}`}
              text={item ?? `Dashboard`}
              Tag={`span`}
            />
          </ListItem>
        </Link>
      ) : (
        <Accordion
          open={show === 1}
          icon={<FiChevronDown />}
          className={`${isMobile ? 'w-[6rem]' : ''}`}>
          <ListItem
            className="p-0"
            selected={show === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3">
              <ListItemPrefix>{Icon}</ListItemPrefix>
              <Typography
                className={`text-md font-bold mr-auto ${
                  isMobile ? 'hidden' : 'flex'
                }`}
                text={item ?? `Dashboard`}
                Tag={`span`}
              />
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              {child.length > 0 &&
                child.map((childItem, idx) => {
                  return (
                    <Fragment key={`${childItem}__${idx}`}>
                      <Link to={childItem?.route as string}>
                        <ListItem>
                          <ListItemPrefix>{childItem?.Icon}</ListItemPrefix>

                          <Typography
                            className={`text-sm font-bold text-gray-700 hover:!no-underline ${
                              isMobile ? 'hidden' : 'flex'
                            }`}
                            text={childItem?.item}
                            Tag={`span`}
                          />
                        </ListItem>
                      </Link>
                    </Fragment>
                  );
                })}
            </List>
          </AccordionBody>
        </Accordion>
      )}
    </Fragment>
  );
};

export default SidebarItems;
