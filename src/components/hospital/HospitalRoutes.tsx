import { Fragment } from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaUserLock, FaUserInjured, FaUserNurse } from 'react-icons/fa';
import { TbActivityHeartbeat, TbFileInvoice } from 'react-icons/tb';
import { BeautifulLink } from '@components/global/dialog/Typography';

const HospitalRoutes = () => {
  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold mt-10 md:grid-cols-8`}>
        <BeautifulLink
          icon={
            <TbActivityHeartbeat
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Activity`}
          to={`#`}
        />

        <BeautifulLink
          icon={
            <AiOutlineDollar
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Payment`}
          to={`#`}
        />

        <BeautifulLink
          icon={
            <TbFileInvoice
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Invoice`}
          to={`#`}
        />

        <BeautifulLink
          icon={
            <FaUserLock
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Admin Staff`}
          to={`#`}
        />

        <BeautifulLink
          icon={
            <FaUserNurse
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Providers`}
          to={`#`}
        />

        <BeautifulLink
          icon={
            <FaUserInjured
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Patients`}
          to={`#`}
        />
      </div>
    </Fragment>
  );
};

export default HospitalRoutes;
