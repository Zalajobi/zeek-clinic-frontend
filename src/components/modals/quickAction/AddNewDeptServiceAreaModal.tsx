import React, { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
} from '@material-tailwind/react';
import { OutlinedButton } from '@components/global/CustomButton';

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
  onUpdateCreateNewNote: (value: boolean) => void;
  onUpdateCreateNewPlan: (value: boolean) => void;
  onUpdateCreateNewProcedure: (value: boolean) => void;
  onUpdateCreateNewLabTest: (value: boolean) => void;
  onUpdateCreateNewAppointment: (value: boolean) => void;
  onUpdateCreateNewVitals: (value: boolean) => void;
  onUpdateCreateNewMedicalSupply: (value: boolean) => void;
  onUpdateCreateNewAdmitPatient: (value: boolean) => void;
  onUpdateCreateNewTransferPatient: (value: boolean) => void;
  onUpdateCreateNewMovePatient: (value: boolean) => void;
  onUpdateCreateNewDischargePatient: (value: boolean) => void;
  onUpdateCreateNewTimeOfDeath: (value: boolean) => void;
  onUpdateCreateNewReview: (value: boolean) => void;
  onUpdateCreateNewLogs: (value: boolean) => void;
  onUpdateCreateNewPrescription: (value: boolean) => void;
  onUpdateCreateNewDental: (value: boolean) => void;
  onUpdateCreateNewClerking: (value: boolean) => void;
  onUpdateCreateNewRadiology: (value: boolean) => void;
  onUpdateCreateNewConsult: (value: boolean) => void;
  onUpdateCreateNewReferral: (value: boolean) => void;
  onUpdateCreateNewReferExP: (value: boolean) => void;
  onUpdateCreateNewUpload: (value: boolean) => void;
  onUpdateCreateNewCharts: (value: boolean) => void;
  onUpdateCreateNewNursing: (value: boolean) => void;
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
  onUpdateCreateNewNote,
  onUpdateCreateNewPlan,
  onUpdateCreateNewProcedure,
  onUpdateCreateNewLabTest,
  onUpdateCreateNewAppointment,
  onUpdateCreateNewVitals,
  onUpdateCreateNewMedicalSupply,
  onUpdateCreateNewAdmitPatient,
  onUpdateCreateNewTransferPatient,
  onUpdateCreateNewMovePatient,
  onUpdateCreateNewDischargePatient,
  onUpdateCreateNewTimeOfDeath,
  onUpdateCreateNewReview,
  onUpdateCreateNewLogs,
  onUpdateCreateNewPrescription,
  onUpdateCreateNewDental,
  onUpdateCreateNewClerking,
  onUpdateCreateNewRadiology,
  onUpdateCreateNewConsult,
  onUpdateCreateNewReferral,
  onUpdateCreateNewReferExP,
  onUpdateCreateNewUpload,
  onUpdateCreateNewCharts,
  onUpdateCreateNewNursing,
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

            {name === 'Role' && (
              <div className={`w-full col-span-2 grid grid-cols-3 gap-6 my-4`}>
                <Switch
                  id="note"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Note`}
                  onChange={(event) =>
                    onUpdateCreateNewNote(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="plan"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Plan`}
                  onChange={(event) =>
                    onUpdateCreateNewPlan(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="procedure"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Procedure`}
                  onChange={(event) =>
                    onUpdateCreateNewProcedure(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="lab_test"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Lab Test`}
                  onChange={(event) =>
                    onUpdateCreateNewLabTest(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="appointment"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Appointment`}
                  onChange={(event) =>
                    onUpdateCreateNewAppointment(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="lab_test"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Lab Test`}
                  onChange={(event) =>
                    onUpdateCreateNewVitals(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="med_supply"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Medical Supply`}
                  onChange={(event) =>
                    onUpdateCreateNewMedicalSupply(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="admin_patient"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Admit Patient`}
                  onChange={(event) =>
                    onUpdateCreateNewAdmitPatient(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="transfer_patient"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Transfer Patient`}
                  onChange={(event) =>
                    onUpdateCreateNewTransferPatient(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="move_patient"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Move Patient`}
                  onChange={(event) =>
                    onUpdateCreateNewMovePatient(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="discharge_patient"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Discharge Patient`}
                  onChange={(event) =>
                    onUpdateCreateNewDischargePatient(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="time_of_death"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Time Of Death`}
                  onChange={(event) =>
                    onUpdateCreateNewTimeOfDeath(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="review"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Review`}
                  onChange={(event) =>
                    onUpdateCreateNewReview(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="logs"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Logs`}
                  onChange={(event) =>
                    onUpdateCreateNewLogs(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="prescription"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Prescription`}
                  onChange={(event) =>
                    onUpdateCreateNewPrescription(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="dental"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Dental`}
                  onChange={(event) =>
                    onUpdateCreateNewDental(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="clerking"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Clerking`}
                  onChange={(event) =>
                    onUpdateCreateNewClerking(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="radiology"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Radiology`}
                  onChange={(event) =>
                    onUpdateCreateNewRadiology(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="consult"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Consult`}
                  onChange={(event) =>
                    onUpdateCreateNewConsult(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="referral"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Referral`}
                  onChange={(event) =>
                    onUpdateCreateNewReferral(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="referExP"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Refer External Prescription`}
                  onChange={(event) =>
                    onUpdateCreateNewReferExP(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="upload"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Upload`}
                  onChange={(event) =>
                    onUpdateCreateNewUpload(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="chart"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Chart`}
                  onChange={(event) =>
                    onUpdateCreateNewCharts(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />

                <Switch
                  id="nursing"
                  ripple={true}
                  className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                  containerProps={{
                    className: 'w-11 h-6',
                  }}
                  label={`Nursing`}
                  onChange={(event) =>
                    onUpdateCreateNewNursing(event.target.checked)
                  }
                  circleProps={{
                    className: 'before:hidden left-0.5 border-none',
                  }}
                />
              </div>
            )}
          </DialogBody>

          <DialogFooter>
            <OutlinedButton
              text={`Cancel`}
              click={handler}
              type={`danger`}
              className={`mr-3 min-w-[200px]`}
            />

            <OutlinedButton
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
