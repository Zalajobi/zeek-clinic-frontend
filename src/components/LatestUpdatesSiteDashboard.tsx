import { CustomCard } from '@components/global/card/CustomCard';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import { DepartmentPayload } from '@typeSpec/payloads';
import moment from 'moment';
import { Typography as MaterialTypography } from '@material-tailwind/react/components/Typography';
import { Button, Spinner } from '@material-tailwind/react';
import AddDepartmentModal from '@components/modals/AddDepartmentModal';
import AddUnitModal from '@components/modals/AddUnitModal';
import { CreateServiceAreaModal } from '@components/modals/CreateServiceAreaModal';
import {
  useLatestDepartment,
  useLatestRole,
  useLatestServiceArea,
  useLatestUnit,
} from '@hooks/components/useLatestUpdatesSiteDashboard';
import {
  DepartmentIcon,
  RolesIcon,
  ServiceAreaIcon,
  UnitIcon,
} from '@components/global/GlobalIcons';
import AddRoleModal from '@components/modals/AddRoleModal';

interface LatestProps {
  className?: string;
}

export const LatestDepartments = ({ className = '' }: LatestProps) => {
  const {
    siteId,
    departments,
    departmentsLoading,
    createDepartmentModal,

    onUpdateCreateDepartmentModal,
  } = useLatestDepartment();

  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
      <div className="grid grid-cols-2 gap-4 w-full my-4">
        <Typography
          Tag={'h4'}
          text="Latest Department"
          className="text-left mr-auto"
        />

        <TypographyWithLink
          text="All"
          to={`/department/${siteId}`}
          className="text-right ml-auto px-5"
        />
      </div>

      {!departmentsLoading ? (
        <div className="flex flex-col gap-2 w-full h-full my-4  overscroll-y-auto lg:gap-4">
          {departments?.data?.depts?.length > 0 ? (
            departments?.data?.depts?.map(
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
                onClick={onUpdateCreateDepartmentModal}>
                <DepartmentIcon
                  className={`w-4 h-4 mr-2`}
                  color="white"
                />{' '}
                Create Department
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}

      <AddDepartmentModal
        open={createDepartmentModal}
        handler={onUpdateCreateDepartmentModal}
      />
    </CustomCard>
  );
};

export const LatestUnit = ({ className = '' }: LatestProps) => {
  const {
    siteId,
    unitsLoading,
    units,
    createUnitModal,

    onUpdateCreateUnitModal,
  } = useLatestUnit();

  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
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
                <UnitIcon
                  className={`w-4 h-4 mr-2`}
                  color="white"
                />{' '}
                Create Unit
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

export const LatestServiceArea = ({ className = '' }: LatestProps) => {
  const {
    siteId,
    createServiceAreaModal,
    serviceAreas,
    serviceAreasLoading,

    onUpdateCreateServiceAreaModal,
  } = useLatestServiceArea();

  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
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
                <ServiceAreaIcon
                  className={`w-4 h-4 mr-2`}
                  color="white"
                />{' '}
                Create Service Area
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

export const LatestRole = ({ className = '' }: LatestProps) => {
  const {
    siteId,
    createRoleModal,
    roles,
    rolesLoading,

    onUpdateCreateRoleModal,
  } = useLatestRole();
  return (
    <CustomCard
      className={`flex flex-col items-baseline justify-start w-full min-h-[400px] ${className}`}>
      <div className="grid grid-cols-2 gap-4 w-full my-4">
        <Typography
          Tag={'h4'}
          text="Latest Role"
          className="text-left mr-auto"
        />

        <TypographyWithLink
          text="All"
          to={`/site/role/${siteId}`}
          className="text-right ml-auto px-5"
        />
      </div>

      {!rolesLoading ? (
        <div className="flex flex-col gap-2 w-full h-full my-4  overscroll-y-auto lg:gap-4">
          {roles?.data?.roles?.length > 0 ? (
            roles?.data?.roles?.map(
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
                onClick={onUpdateCreateRoleModal}>
                <RolesIcon
                  className={`w-4 h-4 mr-2`}
                  color="white"
                />{' '}
                Create Role
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="h-20 w-20" />
        </div>
      )}

      <AddRoleModal
        handler={onUpdateCreateRoleModal}
        open={createRoleModal}
      />
    </CustomCard>
  );
};
