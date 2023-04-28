import React from "react";
import useAdminAddProvider from "../../hooks/admin/useAdminAddProvider";

export const AddProvider = () => {
  const { hello } = useAdminAddProvider()


  return (
    <React.Fragment>
      <h1>{hello}</h1>
    </React.Fragment>
  )
}

export default AddProvider;
