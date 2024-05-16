import { CustomCard } from '@components/global/card/CustomCard';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import { useLatestDepartment } from '@hooks/components/useLatestDepartment';
import {
  Button,
  Spinner,
  Typography as MaterialTypography,
} from '@material-tailwind/react';
import { Fragment } from 'react';
import { DepartmentPayload } from '@typeSpec/payloads';
import moment from 'moment/moment';
import { MdHouse } from 'react-icons/md';

const LatestDepartments = () => {
  const {
    departments,
    departmentsLoading,
    createDepartmentModal,

    onUpdateCreateDepartmentModal,
  } = useLatestDepartment();

  return (
    <CustomCard className="flex flex-col items-baseline justify-start w-full min-h-[300px]">
      <div className="grid grid-cols-2 gap-4 w-full my-4">
        <Typography
          Tag={'h4'}
          text="Latest Dept"
          className="text-left mr-auto"
        />

        <TypographyWithLink
          text="All"
          to={`#`}
          className="text-right ml-auto px-5"
        />
      </div>

      {!departmentsLoading ? (
        <div className="grid grid-cols-2 gap-2 w-full h-full my-4  overscroll-y-auto lg:gap-4">
          {departments?.data?.depts?.length > 0 ? (
            departments?.data?.depts?.map(
              (item: DepartmentPayload, index: number) => (
                <Fragment key={`${item}_${index}`}>
                  <Typography
                    text={item?.name ?? ''}
                    Tag={'p'}
                    size={'xs'}
                    weight={400}
                  />
                  <Typography
                    text={
                      moment(item?.created_at).format(
                        'MMM DD. YYYY, hh:mm:ss A'
                      ) ?? '--'
                    }
                    Tag={'p'}
                    size={'xs'}
                    weight={400}
                  />
                </Fragment>
              )
            )
          ) : (
            <div
              className={`flex flex-col w-full h-full items-center justify-center col-span-2`}>
              <MaterialTypography
                variant={'h6'}
                color={'gray'}
                className={'font-normal text-center mb-4'}>
                No Data
              </MaterialTypography>

              <Button
                className={`rounded-full flex`}
                ripple={true}
                onClick={() => console.log('create Department')}>
                <MdHouse className={`w-4 h-4 mr-2`} /> Create Department
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}
    </CustomCard>
  );
};

export default LatestDepartments;
