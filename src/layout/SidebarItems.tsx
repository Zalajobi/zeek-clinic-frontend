import { Fragment, useState } from 'react';
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

const SidebarItems = ({
  item,
  Icon,
  route,
  showSidebar,
  child,
}: SidebarItemProps) => {
  const [show, setShow] = useState(0);

  const handleOpen = (value: number) => {
    setShow(show === value ? 0 : value);
  };

  return (
    <Fragment>
      {!child ? (
        <Link
          to={route ?? `/admin`}
          className={`py-2`}>
          <ListItem>
            <ListItemPrefix>{Icon}</ListItemPrefix>
            <Typography
              className={`text-md font-bold flex`}
              text={item ?? `Dashboard`}
              Tag={`span`}
            />
          </ListItem>
        </Link>
      ) : (
        <Accordion
          open={show === 1}
          icon={<FiChevronDown />}>
          <ListItem
            className="p-0"
            selected={show === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3">
              <ListItemPrefix>{Icon}</ListItemPrefix>
              <Typography
                className={`font-bold text-black hover:!no-underline flex text-md ${
                  showSidebar ? 'hidden' : 'flex'
                }`}
                text={item ?? `Dashboard`}
                Tag={`h5`}
              />
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0">
              {child.length > 0 &&
                child.map((childItem, idx) => {
                  return (
                    <>
                      <Link to={childItem?.route as string}>
                        <ListItem>
                          <ListItemPrefix>{childItem?.Icon}</ListItemPrefix>

                          <Typography
                            className={`text-sm font-bold text-gray-700 hover:!no-underline ${
                              childItem?.showSidebar ? 'hidden' : 'flex'
                            }`}
                            text={childItem?.item}
                            Tag={`span`}
                          />
                        </ListItem>
                      </Link>
                    </>
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
