import React, { Fragment } from 'react';
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Select,
  Textarea,
  Option,
  Switch,
} from '@material-tailwind/react';
import { BasicOutlineButton } from '@components/global/CustomButton';

interface EditDepartmentModalProps {
  type: 'departments' | 'units' | 'area' | 'role';
  nameOfDepartment: string;
  descriptionPlaceholder: string;
  open: boolean;
  handler: () => void;
  updateDepartmentInformation: () => void;
  onUpdateDeptName: (value: string) => void;
  onUpdateDeptDescription: (value: string) => void;
  onUpdateEditTotalBeds: (value: number) => void;
  onUpdateEditOccupiedBeds: (value: number) => void;
  onUpdateEditType: (value: string) => void;
  onUpdateEditNote: (value: boolean) => void;
  onUpdateEditPlan: (value: boolean) => void;
  onUpdateEditProcedure: (value: boolean) => void;
  onUpdateEditLabTest: (value: boolean) => void;
  onUpdateEditAppointment: (value: boolean) => void;
  onUpdateEditVitals: (value: boolean) => void;
  onUpdateEditMedicalSupply: (value: boolean) => void;
  onUpdateEditAdmitPatient: (value: boolean) => void;
  onUpdateEditTransferPatient: (value: boolean) => void;
  onUpdateEditMovePatient: (value: boolean) => void;
  onUpdateEditDischargePatient: (value: boolean) => void;
  onUpdateEditTimeOfDeath: (value: boolean) => void;
  onUpdateEditReview: (value: boolean) => void;
  onUpdateEditLogs: (value: boolean) => void;
  onUpdateEditPrescription: (value: boolean) => void;
  onUpdateEditDental: (value: boolean) => void;
  onUpdateEditClerking: (value: boolean) => void;
  onUpdateEditRadiology: (value: boolean) => void;
  onUpdateEditConsult: (value: boolean) => void;
  onUpdateEditReferral: (value: boolean) => void;
  onUpdateEditReferExP: (value: boolean) => void;
  onUpdateEditUpload: (value: boolean) => void;
  onUpdateEditCharts: (value: boolean) => void;
  onUpdateEditNursing: (value: boolean) => void;
}

const EditDepartmentModal = ({
  open,
  handler,
  nameOfDepartment,
  descriptionPlaceholder,
  updateDepartmentInformation,
  onUpdateDeptName,
  onUpdateDeptDescription,
  onUpdateEditOccupiedBeds,
  onUpdateEditTotalBeds,
  onUpdateEditType,
  type,
  onUpdateEditNote,
  onUpdateEditPlan,
  onUpdateEditProcedure,
  onUpdateEditLabTest,
  onUpdateEditAppointment,
  onUpdateEditVitals,
  onUpdateEditMedicalSupply,
  onUpdateEditAdmitPatient,
  onUpdateEditTransferPatient,
  onUpdateEditMovePatient,
  onUpdateEditDischargePatient,
  onUpdateEditTimeOfDeath,
  onUpdateEditReview,
  onUpdateEditLogs,
  onUpdateEditPrescription,
  onUpdateEditDental,
  onUpdateEditClerking,
  onUpdateEditRadiology,
  onUpdateEditConsult,
  onUpdateEditReferral,
  onUpdateEditReferExP,
  onUpdateEditUpload,
  onUpdateEditCharts,
  onUpdateEditNursing,
}: EditDepartmentModalProps) => {
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
            <p className={`text-black hover:text-gray-500 decoration-0`}>
              <b className={`font-extrabold`}>Update {nameOfDepartment}</b>
            </p>
          </div>
        </DialogHeader>

        <DialogBody
          divider
          className={`grid gap-4 grid-cols-2 my-2`}>
          <Input
            size="lg"
            onChange={(event) => onUpdateDeptName(event.target.value)}
            placeholder={nameOfDepartment}
            label="Name"
          />

          {type === 'units' && (
            <>
              <Input
                size="lg"
                type={`number`}
                onChange={(event) =>
                  onUpdateEditTotalBeds(Number(event.target.value))
                }
                label="Total Bed(s)"
              />

              <Input
                size="lg"
                type={`number`}
                onChange={(event) =>
                  onUpdateEditOccupiedBeds(Number(event.target.value))
                }
                label="Occupied Bed(s)"
              />
            </>
          )}

          {type === 'area' && (
            <>
              <Select
                size="lg"
                label="Select Service-Area Type"
                onChange={(value) => onUpdateEditType(value as string)}>
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
            onChange={(event) => onUpdateDeptDescription(event.target.value)}
            placeholder={descriptionPlaceholder}
          />

          {type === 'role' && (
            <div className={`w-full col-span-2 grid grid-cols-3 gap-6 my-4`}>
              <Switch
                id="note"
                ripple={true}
                className="h-full w-full bg-red-400 checked:bg-[#2ec946] font-black"
                containerProps={{
                  className: 'w-11 h-6',
                }}
                label={`Note`}
                onChange={(event) => onUpdateEditNote(event.target.checked)}
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
                onChange={(event) => onUpdateEditPlan(event.target.checked)}
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
                  onUpdateEditProcedure(event.target.checked)
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
                onChange={(event) => onUpdateEditLabTest(event.target.checked)}
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
                  onUpdateEditAppointment(event.target.checked)
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
                onChange={(event) => onUpdateEditVitals(event.target.checked)}
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
                  onUpdateEditMedicalSupply(event.target.checked)
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
                  onUpdateEditAdmitPatient(event.target.checked)
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
                  onUpdateEditTransferPatient(event.target.checked)
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
                  onUpdateEditMovePatient(event.target.checked)
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
                  onUpdateEditDischargePatient(event.target.checked)
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
                  onUpdateEditTimeOfDeath(event.target.checked)
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
                onChange={(event) => onUpdateEditReview(event.target.checked)}
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
                onChange={(event) => onUpdateEditLogs(event.target.checked)}
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
                  onUpdateEditPrescription(event.target.checked)
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
                onChange={(event) => onUpdateEditDental(event.target.checked)}
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
                onChange={(event) => onUpdateEditClerking(event.target.checked)}
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
                  onUpdateEditRadiology(event.target.checked)
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
                onChange={(event) => onUpdateEditConsult(event.target.checked)}
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
                onChange={(event) => onUpdateEditReferral(event.target.checked)}
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
                onChange={(event) => onUpdateEditReferExP(event.target.checked)}
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
                onChange={(event) => onUpdateEditUpload(event.target.checked)}
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
                onChange={(event) => onUpdateEditCharts(event.target.checked)}
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
                onChange={(event) => onUpdateEditNursing(event.target.checked)}
                circleProps={{
                  className: 'before:hidden left-0.5 border-none',
                }}
              />
            </div>
          )}
        </DialogBody>

        <DialogFooter>
          <BasicOutlineButton
            text={`Cancel`}
            click={handler}
            type={`danger`}
            className={`mr-3 min-w-[200px]`}
          />

          <BasicOutlineButton
            text={`Update Department`}
            click={updateDepartmentInformation}
            type={`success`}
            className={`ml-3 min-w-[200px]`}
          />
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default EditDepartmentModal;
