import { Fragment } from 'react';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { BeautifulLink } from '../../global/dialog/Typography';

interface ProviderPageRoutesProps {
  siteId: string;
}

const ProviderPageRoutes = ({ siteId }: ProviderPageRoutesProps) => {
  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold mt-10 gap-4 md:grid-cols-8`}>
        <BeautifulLink
          icon={
            <TbActivityHeartbeat
              size={20}
              className={`mr-2`}
              color={`#3975ae`}
            />
          }
          text={`Create New`}
          to={`#`}
        />
      </div>
    </Fragment>
  );
};

export default ProviderPageRoutes;
