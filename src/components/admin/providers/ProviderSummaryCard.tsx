import { Fragment } from 'react';
import { CustomTransparentCard } from '../../global/card/CustomCard';
import { Typography } from '../../global/dialog/Typography';

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
      <div className={`w-full grid grid-cols-2 gap-4`}>
        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#3F596F] !border-0`}>
          <Typography
            className={`text-white`}
            text={`Primary Patients`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-white`}
            text={patients}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#9CBDC6] !border-0`}>
          <Typography
            className={`text-white`}
            text={`Visits`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-white`}
            text={visits}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#83AAB9] !border-0`}>
          <Typography
            className={`text-white`}
            text={`Appointments`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-white`}
            text={appointments}
            size={`4xl`}
            Tag={`h1`}
            weight={800}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`min-h-[140px] max-h-[200px] !bg-[#9AB3B8] !border-0`}>
          <Typography
            className={`text-white`}
            text={`Orders`}
            size={`xl`}
            Tag={`h1`}
            weight={800}
          />

          <Typography
            className={`text-center mt-[20px] text-white`}
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
