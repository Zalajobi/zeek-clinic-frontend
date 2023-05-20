import React from "react";
import Search from "../templates/superadmin/Search";
import BaseInformation from "../templates/superadmin/BaseInformation";
import NotificationIcon from "../templates/superadmin/NotificationIcon";

interface HeaderProps {
  name: string
}

const Header = ({name}:HeaderProps) => {

  return (
    <React.Fragment>
      <nav className="z-50 h-18 w-full border-b border-b-custom-gray-100 bg-brand-secondary-background px-3 py-[0.375rem] dark:border-b-ds-dark-400 dark:!bg-ds-dark-700 md:px-7 lg:px-14">
        <div className="container w-full grid grid-cols-2 gap-6 items-center">
          <Search/>

          <div className={`flex flex-row justify-end`}>
            <NotificationIcon/>

            <BaseInformation name={name}/>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header;