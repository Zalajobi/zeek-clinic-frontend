import React, {Fragment, useState} from "react"
import {Link} from "react-router-dom";
import Logo from "../../../assets/img/global/logo.png";
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Fragment>
      <aside
        className={`md:h-100 w-screen shrink-0 overflow-x-scroll border-r border-r-custom-gray-100 bg-brand-secondary-background !shadow-lg dark:border-r-ds-dark-400 dark:bg-ds-dark-700 ${
          showSidebar ? "md:w-auto" : "md:w-[13rem]"
        } no-scroll md:overflow-y-scroll`}>
        <div
          className={`sticky top-0 z-50 hidden h-14 shrink-0 flex-row items-center border-b
           bg-brand-secondary-background py-2 px-4 dark:border-b-ds-dark-400 dark:bg-ds-dark-700 md:flex ${showSidebar ? 'justify-center' : 'justify-between'}`}
        >
          <Link to="/care">
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
              setShowSidebar(!showSidebar)
            }}
          >
            {showSidebar ? (
              <MdKeyboardDoubleArrowRight size={12}/>
            ) : (
              <MdKeyboardDoubleArrowLeft size={12}/>
            )}
          </button>
        </div>
      </aside>
    </Fragment>
  )
}

export default Sidebar