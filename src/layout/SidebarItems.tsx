import { Fragment, useState } from 'react';
import { SidebarItemProps } from '@typeSpec/common';
import { Typography } from '@components/global/dialog/Typography';

const SidebarItems = ({
  item,
  Icon,
  route,
  showSidebar,
  child,
}: SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {!child ? (
        <li>
          <a
            href={route ?? '/admin'}
            className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 hover:no-underline`}
            onClick={() => {
              setOpen(!open);
            }}
            onMouseEnter={() => setOpen(!open)}>
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              {Icon}
            </span>
            <Typography
              className={`text-sm font-bold text-gray-500 hover:text-gray-800 ${
                showSidebar ? 'hidden' : 'flex'
              }`}
              text={item ?? `Dashboard`}
              Tag={`span`}
            />
          </a>
        </li>
      ) : (
        <li>
          <a
            href="src/components/layout/SidebarItems#"
            className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 hover:no-underline`}
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setOpen(!open)}>
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
              {Icon}
            </span>
            <Typography
              className={`text-sm font-bold !text-gray-500 hover:!no-underline hover:!text-gray-800 ${
                showSidebar ? 'hidden' : 'flex'
              }`}
              text={item ?? `Dashboard`}
              Tag={`span`}
            />
          </a>

          {open && (
            <>
              {child.length > 0 &&
                child.map((childItem, idx) => {
                  return (
                    <a
                      href={childItem.route as string}
                      className={`flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 ml-8 text-gray-500 hover:text-gray-800`}
                      key={idx}>
                      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                        {childItem?.Icon}
                      </span>

                      <Typography
                        className={`text-sm font-bold !text-gray-500 hover:!no-underline hover:!text-gray-800 ${
                          childItem?.showSidebar ? 'hidden' : 'flex'
                        }`}
                        text={childItem?.item}
                        // to={childItem.route as string}
                        Tag={`span`}
                      />
                    </a>
                  );
                })}
            </>
          )}
        </li>
      )}
    </Fragment>
  );
};

export default SidebarItems;
