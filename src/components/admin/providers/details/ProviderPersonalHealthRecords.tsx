import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment } from 'react';
import { Typography } from '@components/global/dialog/Typography';

const ProviderPersonalHealthRecords = () => {
  return (
    <Fragment>
      <CustomCard className={`w-full bg-white grid grid-cols-8 col-span-6`}>
        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Height (ft)`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`5.11`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Weight (Ib)`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`200`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Marital Status`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`Single`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Last Known Allergy`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`Crab`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Blood Group`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`O+`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Genotype`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`AA`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`Organ Donor`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`NO`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>

        <div className={`flex flex-col items-center justify-center py-3`}>
          <Typography
            text={`DNR`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={`NO`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0`}
          />
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default ProviderPersonalHealthRecords;
