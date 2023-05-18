import React from 'react'
import Text from "../../global/Text";
import {Link} from "react-router-dom";
import {SidebarItemProps} from "../../../types/superadmin";

const SidebarItem = ({item, Icon, route, showSidebar, child}:SidebarItemProps) => {
  console.log(child)

  // if (!child)
    return (
      <React.Fragment>
        <Link to={route ?? '/dashboard'} className={`flex flex-row items-center h-10 my-1 hover:bg-teal-50 px-2`}>
          {Icon}

          <Text text={item ?? `Dashboard`} weight={500} size={`base`} className={`ml-2 ${showSidebar ? 'hidden' : 'flex'}`}/>
        </Link>
      </React.Fragment>
    )
}

export default SidebarItem
