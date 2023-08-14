import { Fragment } from 'react';
import { BsFillCalendarEventFill, BsFillPieChartFill } from 'react-icons/bs';
import {
  FaBuilding,
  FaFileInvoice,
  FaUserInjured,
  FaUserMd,
} from 'react-icons/fa';
import { MdInfo, MdPersonAdd } from 'react-icons/md';
import { TbMessageCircle2Filled } from 'react-icons/tb';
import { BeautifulLink } from '../global/dialog/Typography';
import { RiAdminFill, RiBuilding2Fill, RiShieldUserFill } from 'react-icons/ri';
import { SiHomeassistantcommunitystore, SiWebmoney } from 'react-icons/si';
import { IoMdAddCircle } from 'react-icons/io';

interface ProviderPageRoutesProps {
  siteId: string;
  id: string;
}

const AdminRoutes = ({ siteId, id }: ProviderPageRoutesProps) => {
  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold mt-10 gap-4 md:grid-cols-6 lg:grid-cols-8`}>
        <BeautifulLink
          icon={
            <FaUserMd
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Provider`}
          to={`/admin/provider/new/${siteId}`}
        />

        <BeautifulLink
          icon={
            <MdPersonAdd
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Provider`}
          to={`/admin/provider/new/${siteId}`}
        />

        <BeautifulLink
          icon={
            <MdInfo
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Site Information`}
          to={`/admin/site/details/${siteId}`}
        />

        <BeautifulLink
          icon={
            <FaUserInjured
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Patient`}
          to={`/admin/patients/${siteId}`}
        />

        <BeautifulLink
          icon={
            <MdPersonAdd
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Patient`}
          to={`/admin/patients/${siteId}`}
        />

        <BeautifulLink
          icon={
            <MdInfo
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Profile`}
          to={`/admin/profile/${id}`}
        />

        <BeautifulLink
          icon={
            <BsFillCalendarEventFill
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Appointment`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <TbMessageCircle2Filled
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Inbox`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <FaFileInvoice
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Invoice`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <RiAdminFill
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Admin`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <MdPersonAdd
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Admin`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <SiWebmoney
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Salary & Wage`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <FaBuilding
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Department`}
          to={`/admin/appointments/${id}`}
        />

        <BeautifulLink
          icon={
            <IoMdAddCircle
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Dept`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <BsFillPieChartFill
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Service Area`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <IoMdAddCircle
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Area`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <RiShieldUserFill
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Role`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <IoMdAddCircle
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Role`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <SiHomeassistantcommunitystore
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Unit`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <IoMdAddCircle
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Unit`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <RiBuilding2Fill
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Site`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />

        <BeautifulLink
          icon={
            <IoMdAddCircle
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create Site`}
          to={`/admin/appointments/${id}`}
          className={`!w-full`}
        />
      </div>
    </Fragment>
  );
};

export default AdminRoutes;