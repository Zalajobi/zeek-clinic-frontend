import {Fragment, ReactNode} from "react"
import Sidebar from "./Sidebar";

const ProviderBaseTemplate = ({children}: {children : ReactNode}) => {
  return (
    <Fragment>
      <div className="relative flex h-screen flex-1 overflow-y-auto bg-white text-brand-body-text dark:bg-ds-dark-800 dark:text-ds-dark-300">
        <Sidebar/>

        {children}
      </div>
    </Fragment>
  )
}

export default ProviderBaseTemplate