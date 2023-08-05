import { Fragment } from 'react';
import { BsEnvelopeFill, BsEnvelopeOpenFill } from 'react-icons/bs';
import { Typography } from '../../global/dialog/Typography';
import { formatTimeOrDays } from '../../../util';
import ListView from '../../global/views/ListView';

interface HospitalReportProps {
  data: {
    title: string;
    hospital: string;
    reportedBy: string;
    read: boolean;
    createdAt: string;
  }[];
}

const HospitalReport = ({ data }: HospitalReportProps) => {
  return (
    <Fragment>
      <div className="w-full h-full flex flex-col space-y-1 -mx-2 overflow-y-auto">
        {data.map((item, index) => {
          return (
            <>
              <ListView Tag={`button`}>
                <div className={`w-full flex flex-row items-center`}>
                  {item?.read ? (
                    <BsEnvelopeOpenFill
                      size={25}
                      className={`mr-2`}
                      color={`#3b82f6`}
                    />
                  ) : (
                    <BsEnvelopeFill
                      size={25}
                      className={`mr-2`}
                      color={`#16a34a`}
                    />
                  )}

                  <div className={`flex flex-col justify-start mr-auto`}>
                    <Typography
                      text={item?.title}
                      Tag={`p`}
                      className={`truncate max-w-[250px]`}
                    />

                    <Typography
                      text={`Reported By ${item.reportedBy}`}
                      Tag={'span'}
                      className={`text-left text-[#C4C4C6] text-[12px] text-normal leading truncate max-w-xs`}
                    />
                  </div>

                  <div className={`flex flex-col ml-auto`}>
                    <Typography
                      text={formatTimeOrDays(item.createdAt)}
                      Tag={'span'}
                      className={`text-left text-[#C4C4C6] text-[12px] text-normal leading truncate max-w-xs`}
                    />
                  </div>
                </div>
              </ListView>
            </>
          );
        })}
      </div>
    </Fragment>
  );
};

export default HospitalReport;
