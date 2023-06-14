import { Fragment } from "react";
import useAdminAddProvider from "../../hooks/admin/useAdminAddProvider";

export const AddProvider = () => {
  const { hello } = useAdminAddProvider()


  return (
    <Fragment>
      <h1>{hello}</h1>
    </Fragment>
  )
}

export default AddProvider;
