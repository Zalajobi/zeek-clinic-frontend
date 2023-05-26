import {Fragment, useState} from "react"
import {Link} from "react-router-dom";
import Text from "../global/Text";
import {SidebarItemProps} from "../../types/common";

const SidebarItems = ({item, Icon, route, showSidebar, child}:SidebarItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      {!child ? (
        <div className={`w-[50%] min-w-max p-1.5 md:w-full`}>
          <Link
            to={route ?? '/dashboard'}
            className={`flex flex-row items-center disabled:cursor-not-allowed text-sm px-2 md:py-2 md:px-4 border !no-underline font-lato relative flex h-full w-full cursor-pointer flex-col items-center justify-between gap-3 rounded !border-none !px-3 py-2 font-normal md:flex-row md:justify-start text-brand-body-text hover:bg-teal-50 dark:text-ds-dark-300 hover:dark:bg-ds-dark-600/50`}>
            {Icon}

            <Text text={item ?? `Dashboard`} weight={500} size={`base`} className={`ml-2 ${showSidebar ? 'hidden' : 'flex'}`}/>
          </Link>
        </div>
      ) : (
        <div className={`w-[50%] min-w-max p-1.5 md:w-full`}>
          <button
            className={`flex flex-row items-center disabled:cursor-not-allowed text-sm px-2 md:py-2 md:px-4 border !no-underline font-lato relative flex h-full w-full cursor-pointer flex-col items-center justify-between gap-3 rounded !border-none !px-3 py-2 font-normal md:flex-row md:justify-start text-brand-body-text hover:bg-teal-50 dark:text-ds-dark-300 hover:dark:bg-ds-dark-600/50`}
            onClick={() => setOpen(!open)}
          >
            {Icon}
            <Text text={item ?? `Dashboard`} weight={500} size={`base`} className={`ml-2 ${showSidebar ? 'hidden' : 'flex'}`}/>
          </button>

          {open && (
            <>
              {child.length > 0 && child.map((childItem, idx) => {
                return (
                  <div className={`ml-4 border-l p-1.5 false`} key={idx}>
                    <div className={`relative w-[50%] min-w-max md:w-full`}>
                      <Link to={childItem?.route ?? 'superadmin'} className={`relative flex w-full cursor-pointer flex-col items-center gap-3 rounded px-3 py-2 font-normal md:flex-row false text-brand-body-text hover:bg-[#ECF7FE] dark:text-ds-dark-300 hover:dark:bg-ds-dark-600/50`}>
                        {childItem?.Icon}

                        <Text text={childItem?.item} weight={500} size={`base`} className={`ml-2 ${childItem?.showSidebar ? 'hidden' : 'flex'}`} color={`black`}/>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
      )}
    </Fragment>
  )
}

export default SidebarItems