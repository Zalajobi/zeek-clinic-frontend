import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import { CustomCard } from '@components/global/card/CustomCard';
import { useLatestServiceArea } from '@hooks/components/useLatestServiceArea';
import { DepartmentPayload } from '@typeSpec/payloads';
import moment from 'moment/moment';
import { Typography as MaterialTypography } from '@material-tailwind/react/components/Typography';
import { Button, Spinner } from '@material-tailwind/react';
import { MdHouse } from 'react-icons/md';
import CreateServiceAreaModal from '@components/modals/CreateServiceAreaModal';

const LatestServiceArea = () => {
  const {
    siteId,
    createServiceAreaModal,
    serviceAreas,
    serviceAreasLoading,

    onUpdateCreateServiceAreaModal,
  } = useLatestServiceArea();

  return (
    <CustomCard className="flex flex-col items-baseline justify-start w-full min-h-[400px]">
      <div className="grid grid-cols-2 gap-4 w-full my-4">
        <Typography
          Tag={'h4'}
          text="Latest Service Area"
          className="text-left mr-auto"
        />

        <TypographyWithLink
          text="All"
          to={`/site/service-area/${siteId}`}
          className="text-right ml-auto px-5"
        />
      </div>

      {!serviceAreasLoading ? (
        <div className="flex flex-col gap-2 w-full h-full my-4  overscroll-y-auto lg:gap-4">
          {serviceAreas?.data?.serviceAreas?.length > 0 ? (
            serviceAreas?.data?.serviceAreas?.map(
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
                onClick={onUpdateCreateServiceAreaModal}>
                <MdHouse className={`w-4 h-4 mr-2`} /> Create Service Area
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}

      <CreateServiceAreaModal
        open={createServiceAreaModal}
        handler={onUpdateCreateServiceAreaModal}
      />
    </CustomCard>
  );
};

export default LatestServiceArea;
