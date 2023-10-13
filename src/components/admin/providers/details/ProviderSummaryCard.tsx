import { Fragment } from 'react';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { Typography } from '@components/global/dialog/Typography';

interface ProviderSummaryCardProps {
  patients: string | number;
  visits: string | number;
  appointments: string | number;
  orders: string | number;
}

const ProviderSummaryCard = ({
  patients,
  visits,
  appointments,
  orders,
}: ProviderSummaryCardProps) => {
  return (
    <Fragment>
      <div className={`w-full grid grid-cols-2 gap-4 col-span-2`}>
        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#3F596F] !border-0`}>
          <Typography
            className={`text-[#fff]`}
            text={`Patients`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-[#fff]`}
            text={patients}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#9CBDC6] !border-0`}>
          <Typography
            className={`text-[#fff]`}
            text={`Visits`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-[#fff]`}
            text={visits}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#83AAB9] !border-0`}>
          <Typography
            className={`text-[#fff]`}
            text={`Appointments`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-[#fff]`}
            text={appointments}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#9AB3B8] !border-0`}>
          <Typography
            className={`text-[#fff]`}
            text={`Orders`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-[#fff]`}
            text={orders}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>
      </div>
    </Fragment>
  );
};

export default ProviderSummaryCard;
