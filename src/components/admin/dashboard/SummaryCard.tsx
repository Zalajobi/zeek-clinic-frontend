import { Fragment, ReactNode } from 'react';
import { CustomCard } from '../../global/card/CustomCard';
import Typography from '../../global/Typography';

interface SummaryCardProps {
  icon: ReactNode;
  boldHeader: string;
  lightHeader: string;
  description: string;
  descriptionContext?: string;
  contextColour: string;
  bgColour: string;
}

const SummaryCard = ({
  icon,
  boldHeader,
  lightHeader,
  description,
  descriptionContext,
  contextColour,
  bgColour,
}: SummaryCardProps) => {
  return (
    <Fragment>
      <CustomCard className={`max-w-md w-full`}>
        <div className={`w-full flex flex-col justify-start px-8 py-4`}>
          <div className={`w-full flex flex-row justify-start mb24`}>
            <div
              className={`rounded-full p-4 mr-4`}
              style={{
                backgroundColor: bgColour,
              }}>
              {icon}
            </div>

            <div className={`flex flex-col ml-1`}>
              <Typography
                text={boldHeader}
                Tag={`h2`}
                className={`text-xl`}
              />

              <Typography
                text={lightHeader}
                Tag={`p`}
                className={`text-xs text-[#C4C4C6]`}
              />
            </div>
          </div>

          <div className={`flex flex-row mt-2 items-center`}>
            <span
              className={`mr-1`}
              style={{
                color: contextColour,
              }}>
              {descriptionContext}
            </span>

            <Typography
              text={description}
              Tag={`p`}
              className={`text-xs`}
            />
          </div>
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default SummaryCard;
