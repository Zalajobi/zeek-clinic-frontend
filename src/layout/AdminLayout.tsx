import React from "react";
// import { useState } from "react";


const AdminLayout = () => {
  // const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="flex flex-row">
        <div className="flex flex-col w-[20%] h-full">
          <h1>HELLO</h1>
        </div>

        <div className="flex flex-col w-[80%] h-full">
          <h1>HEADER</h1>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdminLayout