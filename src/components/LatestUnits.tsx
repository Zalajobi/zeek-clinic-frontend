import { CustomCard } from '@components/global/card/CustomCard';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import { useLatestUnit } from '@hooks/components/useLatestUnit';
import { DepartmentPayload } from '@typeSpec/payloads';
import moment from 'moment';
import { Typography as MaterialTypography } from '@material-tailwind/react/components/Typography';
import { Button, Spinner } from '@material-tailwind/react';
import { MdHouse } from 'react-icons/md';
import AddUnitModal from '@components/modals/AddUnitModal';

const LatestDepartment = () => {
  const {
    siteId,
    unitsLoading,
    units,
    createUnitModal,

    onUpdateCreateUnitModal,
  } = useLatestUnit();

  return (
    <CustomCard className="flex flex-col items-baseline justify-start w-full min-h-[400px]">
      <div className="grid grid-cols-2 gap-4 w-full my-4">
        <Typography
          Tag={'h4'}
          text="Latest Unit"
          className="text-left mr-auto"
        />

        <TypographyWithLink
          text="All"
          to={`/unit/${siteId}`}
          className="text-right ml-auto px-5"
        />
      </div>

      {!unitsLoading ? (
        <div className="flex flex-col gap-2 w-full h-full my-4  overscroll-y-auto lg:gap-4">
          {units?.data?.units?.length > 0 ? (
            units?.data?.units?.map(
              (item: DepartmentPayload, index: number) => (
                <div
                  className="grid grid-cols-2 gap-2"
                  key={`${item}_${index}`}>
                  <Typography
                    text={item?.name ?? ''}
                    Tag={'p'}
                    size={'xs'}
                    weight={400}
                    className="truncate mr-auto w-full"
                  />
                  <Typography
                    text={
                      moment(item?.createdAt).format(
                        'MMM DD. YYYY, hh:mm:ss A'
                      ) ?? '--'
                    }
                    Tag={'p'}
                    size={'xs'}
                    weight={400}
                    className="ml-auto truncate"
                  />
                </div>
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
                onClick={onUpdateCreateUnitModal}>
                <MdHouse className={`w-4 h-4 mr-2`} /> Create Unit
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}

      <AddUnitModal
        handler={onUpdateCreateUnitModal}
        open={createUnitModal}
      />
    </CustomCard>
  );
};

export default LatestDepartment;
