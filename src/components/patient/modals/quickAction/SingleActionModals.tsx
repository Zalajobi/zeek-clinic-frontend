import {
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  UserServiceDepartmentResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';
import { SelectInputFieldProps } from '@typeSpec/common';
import { SelectInput } from '@components/global/formInput/CustomInput';
import { BasicOutlineButton } from '@components/global/CustomButton';

interface MovePatientActionModal {
  handler: () => void;
  open: boolean;
  name: string;
  profile_pic: string;
  departments: SelectInputFieldProps[];
  serviceAreas: SelectInputFieldProps[];
  units: SelectInputFieldProps[];
  onUpdateDepartment: (value: string) => void;
  onUpdateServiceArea: (value: string) => void;
  onUpdateUnit: (value: string) => void;
  onSubmit: () => void;
}

export const MovePatientActionModal = ({
  handler,
  open,
  name,
  profile_pic,
  departments,
  serviceAreas,
  units,
  onUpdateDepartment,
  onUpdateServiceArea,
  onUpdateUnit,
  onSubmit,
}: MovePatientActionModal) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handler}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>
          <div className={`flex items-center gap-3`}>
            <Avatar
              src={profile_pic}
              alt={name}
              size={`md`}
              className={`border border-blue-50 bg-blue-gray-50/50 object-contain p-1`}
              loading={`lazy`}
              width={48}
              height={48}
            />

            <Link
              to={`#`}
              className={`text-black hover:text-gray-500 decoration-0`}>
              <b className={`font-extrabold`}>{name}</b>
            </Link>
          </div>
        </DialogHeader>

        <DialogBody
          divider
          className={`grid gap-4 grid-cols-2 my-2`}>
          <SelectInput
            label={`Department`}
            options={departments}
            className={`my-3`}
            change={(event) => onUpdateDepartment(event.target.value)}
            id={`department`}
          />

          <SelectInput
            label={`Service Area`}
            options={serviceAreas}
            className={`my-3`}
            change={(event) => onUpdateServiceArea(event.target.value)}
            id={`Service Area`}
          />

          <SelectInput
            label={`Unit`}
            options={units}
            className={`my-3`}
            change={(event) => onUpdateUnit(event.target.value)}
            id={`Unit`}
          />
        </DialogBody>

        <DialogFooter>
          <BasicOutlineButton
            text={`Cancel`}
            click={handler}
            type={`danger`}
            className={`mr-3 min-w-[200px]`}
          />

          <BasicOutlineButton
            text={`Move Patient`}
            click={onSubmit}
            type={`success`}
            className={`ml-3 min-w-[200px]`}
          />
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
