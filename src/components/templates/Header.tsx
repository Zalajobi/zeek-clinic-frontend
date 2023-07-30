import { ChangeEvent, Fragment } from "react";
import Search from "./superadmin/Search";
import BaseInformation from "./superadmin/BaseInformation";
import NotificationIcon from "./superadmin/NotificationIcon";

interface HeaderProps {
  name: string
  query: string
  role: string
  handleSearch: (event:ChangeEvent<HTMLInputElement>) => void
}

const Header = ({name, query, role, handleSearch}:HeaderProps) => {

  return (
    <Fragment>
      <nav className="z-50 h-18 w-full border-b border-b-custom-gray-100 bg-brand-secondary-background px-3 py-[0.375rem] dark:border-b-ds-dark-400 dark:!bg-ds-dark-700 md:px-7 lg:px-14">
        <div className="container w-full grid grid-cols-2 gap-6 items-center">
          <Search search={query}  handleSearch={handleSearch}/>

          <div className={`flex flex-row justify-end`}>
            <NotificationIcon/>

            <BaseInformation name={name} role={role}/>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header;