import {Fragment, ReactNode} from "react"

const ProviderBaseTemplate = ({children}: {children : ReactNode}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default ProviderBaseTemplate