import { Fragment } from "react";
import { AiOutlineDollar } from 'react-icons/ai'
import { TbActivityHeartbeat, TbFileInvoice } from 'react-icons/tb'
import { Link } from "react-router-dom";
import Text from "../global/Text";

const HospitalRoutes = () => {
  return (
    <Fragment>
      <div className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold mt-10 gap-4 md:grid-cols-8`}>
        <Link to={`#`} className={`flex flex-row items-center justify-center bg-white rounded-[30px] p-4 hover:no-underline`}>
          <TbActivityHeartbeat
            size={30}
            className={`mr-2`}
            color={`#3975ae`}
          />

          <Text
            text={`Activity`}
            weight={900}
            className={`!text-[#3975ae] text-lg`}
          />
        </Link>

        <Link to={`#`} className={`flex flex-row items-center justify-center bg-white rounded-[30px] p-4 hover:no-underline`}>
          <AiOutlineDollar
            size={20}
            className={`mr-2`}
            color={`#3975ae`}
          />

          <Text
            text={`Payment`}
            weight={900}
            className={`!text-[#3975ae]`}
          />
        </Link>

        <Link to={`#`} className={`flex flex-row items-center justify-center bg-white rounded-[30px] p-4 hover:no-underline`}>
          <TbFileInvoice
            size={20}
            className={`mr-2`}
            color={`#3975ae`}
          />

          <Text
            text={`Invoice`}
            weight={900}
            className={`!text-[#3975ae]`}
          />
        </Link>
      </div>
    </Fragment>
  )
}

export default HospitalRoutes;