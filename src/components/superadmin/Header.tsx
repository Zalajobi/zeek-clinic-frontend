import React from "react";
import {Notifications} from "@mui/icons-material";
import Search from "../templates/Search";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="z-50 flex h-14 w-full flex-row items-center justify-between border-b border-b-custom-gray-100 bg-brand-secondary-background px-3 py-[0.375rem] dark:border-b-ds-dark-400 dark:!bg-ds-dark-700 md:px-7 lg:px-14">
        {/*<Notifications*/}
        {/*  className="!border-0 !px-0 md:mr-6 md:hidden"*/}
        {/*  showToast*/}
        {/*/>*/}

        <img
          src={""}
          className="mx-2 block shrink-0 md:hidden"
          width={50}
          height={50}
          alt=""
        />

        <Search/>



      </nav>
    </React.Fragment>
  )
}

export default Header;