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
  const [open, setOpen] = useState(false);
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
              className={`text-sm font-bold text-gray-500 ${
                showSidebar ? 'hidden' : 'flex'
              }`}
              text={item ?? `Dashboard`}
              Tag={`span`}
            />
          </ListItem>
        </Link>
      ) : (
        // <li>
        //   <a
        //     href="src/components/layout/SidebarItems#"
        //     className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 hover:no-underline`}
        //     onClick={() => setOpen(!open)}
        //     onMouseEnter={() => setOpen(!open)}>
        //     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
        //       {Icon}
        //     </span>
        //     <Typography
        //       className={`text-sm font-bold !text-gray-500 hover:!no-underline hover:!text-gray-800 ${
        //         showSidebar ? 'hidden' : 'flex'
        //       }`}
        //       text={item ?? `Dashboard`}
        //       Tag={`span`}
        //     />
        //   </a>
        //
        //   {open && (
        //     <>
        //       {child.length > 0 &&
        //         child.map((childItem, idx) => {
        //           return (
        //             <a
        //               href={childItem.route as string}
        //               className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ml-8 text-gray-500 hover:text-gray-800`}
        //               key={idx}>
        //               <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
        //                 {childItem?.Icon}
        //               </span>
        //
        //               <Typography
        //                 className={`text-sm font-bold !text-gray-500 hover:!no-underline hover:!text-gray-800 ${
        //                   childItem?.showSidebar ? 'hidden' : 'flex'
        //                 }`}
        //                 text={childItem?.item}
        //                 // to={childItem.route as string}
        //                 Tag={`span`}
        //               />
        //             </a>
        //           );
        //         })}
        //     </>
        //   )}
        // </li>

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
                className={`text-[#0E0F17] font-bold text-sm font-bold !text-gray-500 hover:!no-underline flex text-base ${
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
                            className={`text-sm font-bold !text-gray-500 hover:!no-underline ${
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
