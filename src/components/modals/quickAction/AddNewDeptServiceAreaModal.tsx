import React, { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
  Textarea,
} from '@material-tailwind/react';
import { BasicOutlineButton } from '@components/global/CustomButton';

interface AddNewDeptServiceAreaModalProps {
  name: string;
  open: boolean;
  handler: () => void;
  updateName: (value: string) => void;
  updateDescription: (value: string) => void;
  submit: () => void;
  onUpdateCreateTotalBeds: (value: number) => void;
  onUpdateCreateOccupiedBeds: (value: number) => void;
  onUpdateCreateNewItemType: (value: string) => void;
}

export const AddNewDeptServiceAreaModal = ({
  name,
  handler,
  open,
  updateName,
  updateDescription,
  submit,
  onUpdateCreateTotalBeds,
  onUpdateCreateOccupiedBeds,
  onUpdateCreateNewItemType,
}: AddNewDeptServiceAreaModalProps) => {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');

  return (
    <Fragment>
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
              <p className={`text-black hover:text-gray-500 decoration-0`}>
                <b className={`font-extrabold`}>Create New {name}</b>
              </p>
            </div>
          </DialogHeader>

          <DialogBody
            divider
            className={`grid gap-4 grid-cols-2 my-2`}>
            <Input
              size="lg"
              max={50}
              min={3}
              onChange={(event) => {
                updateName(event.target.value);
                setNewName(event.target.value);
              }}
              success={!!(newName && newName.length >= 3)}
              error={newName.length < 3 && newName.length > 1}
              label="Name"
            />

            {name === 'Unit' && (
              <>
                <Input
                  size="lg"
                  type={`number`}
                  onChange={(event) =>
                    onUpdateCreateTotalBeds(Number(event.target.value))
                  }
                  label="Total Bed(s)"
                />

                <Input
                  size="lg"
                  type={`number`}
                  onChange={(event) =>
                    onUpdateCreateOccupiedBeds(Number(event.target.value))
                  }
                  label="Occupied Bed(s)"
                />
              </>
            )}

            {name === 'Service Area' && (
              <>
                <Select
                  size="lg"
                  label="Select Service-Area Type"
                  onChange={(value) =>
                    onUpdateCreateNewItemType(value as string)
                  }>
                  <Option
                    className={`my-2`}
                    value={`INPATIENT`}>
                    INPATIENT
                  </Option>
                  <Option
                    className={`my-2`}
                    value={`PROCEDURE`}>
                    PROCEDURE
                  </Option>
                  <Option
                    className={`my-2`}
                    value={`OUTPATIENT`}>
                    OUTPATIENT
                  </Option>
                  <Option
                    className={`my-2`}
                    value={`EMERGENCY`}>
                    EMERGENCY
                  </Option>
                  <Option
                    className={`my-2`}
                    value={`OTHERS`}>
                    OTHERS
                  </Option>
                </Select>
              </>
            )}

            <Textarea
              label="Description"
              maxLength={1000}
              minLength={20}
              success={!!(newDescription && newDescription.length >= 20)}
              error={newDescription.length < 20 && newDescription.length >= 1}
              onChange={(event) => {
                updateDescription(event.target.value);
                setNewDescription(event.target.value);
              }}
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
              // Disable Button Click activity if name and description hasn't met the condition
              disabled={
                !(newDescription && newDescription.length >= 20) ||
                !(newName && newName.length >= 3)
              }
              text={`Create ${name}`}
              click={submit}
              type={`success`}
              className={`ml-3 min-w-[200px]`}
            />
          </DialogFooter>
        </Dialog>
      </Fragment>
    </Fragment>
  );
};
