import { Fragment } from 'react';
import CustomCard from '../../global/card/CustomCard';
import Typography from '../../global/Typography';
import TypographyLink from '../../global/TypographyLink';
import CustomInnerCard from '../../global/card/CustomInnerCard';

const GeneralReport = () => {
  const date = new Date();
  const report = [
    {
      message: 'Room 501 AC is not working',
      reportBy: 'Steeve',
      reportTime: date.getUTCDate(),
      viewed: true,
    },
  ];

  return (
    <Fragment>
      <CustomCard
        className={`max-w-md flex flex-col items-center justify-start`}>
        <div className={`flex flex-row w-full items-center mt-[10px]`}>
          <Typography
            text={`Hospital Report`}
            Tag={`h4`}
            className={`text-start text-[20px] mr-auto`}
          />

          <TypographyLink
            text={`View All`}
            to={`/admin`}
            className={`text-[13px] ml-auto hover:cursor-pointer hover:no-underline hover:text-[#C4C4C6]`}
          />
        </div>

        <div className={`w-full flex flex-col px-3`}>
          <CustomInnerCard>
            <div className={`flex`}>HELLO</div>
          </CustomInnerCard>
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default GeneralReport;
