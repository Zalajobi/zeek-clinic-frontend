import { Fragment } from 'react';
import { MdInfo, MdPersonAdd } from 'react-icons/md';
import { BeautifulLink } from '../../global/dialog/Typography';

interface ProviderPageRoutesProps {
  siteId: string;
}

const ProviderPageRoutes = ({ siteId }: ProviderPageRoutesProps) => {
  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold mt-10 gap-4 md:grid-cols-6 lg:grid-cols-8`}>
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
            <MdInfo
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Patients`}
          to={`/admin/patients`}
        />
      </div>
    </Fragment>
  );
};

export default ProviderPageRoutes;
