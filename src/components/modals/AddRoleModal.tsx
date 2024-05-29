import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  CheckboxInput,
  CustomTextAreaInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CreateRoleInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateRoleInputSchema } from '@typeSpec/forms';
import { useAddRoleModal } from '@hooks/modals/useAddRoleModal';

interface AddRoleModalProps {
  open: boolean;
  handler: () => void;
}

const AddRoleModal = ({ open, handler }: AddRoleModalProps) => {
  const { createRole } = useAddRoleModal(handler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoleInput>({
    resolver: yupResolver(CreateRoleInputSchema),
  });

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add Unit'}
        handler={handler}
        size={'md'}
        open={open}
        footer={
          <Fragment>
            <OutlinedButton
              text={`Cancel`}
              type={`danger`}
              click={handler}
            />

            <OutlinedButton
              click={handleSubmit(createRole)}
              text={`Confirm`}
              type={`secondary`}
            />
          </Fragment>
        }
        className={`max-h-[500px]`}>
        <div className={`p-6 grid grid-cols-1 gap-4 md:grid-cols-2`}>
          {/*Role Name*/}
          <TextInput
            label={`Role Name`}
            className={`my-3`}
            id={'name'}
            errorMsg={errors.name?.message ?? ''}
            type={'text'}
            register={register}
          />

          {/*Role Description*/}
          <CustomTextAreaInput
            label={`Description`}
            className={`my-3`}
            id={'description'}
            errorMsg={errors.description?.message ?? ''}
            register={register}
            size={'lg'}
          />
        </div>

        <div className={`p-6 grid grid-cols-1 gap-4 md:grid-cols-3`}>
          <CheckboxInput
            label={`Prescription`}
            id={`prescription`}
            register={register}
          />

          <CheckboxInput
            label={`Take Note(s)`}
            id={`note`}
            register={register}
          />

          <CheckboxInput
            label={`Procedure`}
            id={`procedure`}
            register={register}
          />

          <CheckboxInput
            label={`Lab Test`}
            id={`lab_test`}
            register={register}
          />

          <CheckboxInput
            label={`Appointment`}
            id={`appointment`}
            register={register}
          />

          <CheckboxInput
            label={`Vital(s)`}
            id={`vitals`}
            register={register}
          />

          <CheckboxInput
            label={`Medical Supply`}
            id={`med_supply`}
            register={register}
          />

          <CheckboxInput
            label={`Admit Patient`}
            id={`admit_patient`}
            register={register}
          />

          <CheckboxInput
            label={`Transfer Patient`}
            id={`transfer_patient`}
            register={register}
          />

          <CheckboxInput
            label={`Move Patient`}
            id={`move_patient`}
            register={register}
          />

          <CheckboxInput
            label={`Discharge Patient`}
            id={`discharge`}
            register={register}
          />

          <CheckboxInput
            label={`Time Of Death`}
            id={`time_of_death`}
            register={register}
          />

          <CheckboxInput
            label={`Review`}
            id={`review`}
            register={register}
          />

          <CheckboxInput
            label={`Logs`}
            id={`logs`}
            register={register}
          />

          <CheckboxInput
            label={`Dental`}
            id={`dental`}
            register={register}
          />

          <CheckboxInput
            label={`Clerking`}
            id={`clerking`}
            register={register}
          />

          <CheckboxInput
            label={`Radiology`}
            id={`radiology`}
            register={register}
          />

          <CheckboxInput
            label={`Consult`}
            id={`consult`}
            register={register}
          />

          <CheckboxInput
            label={`Referral`}
            id={`referral`}
            register={register}
          />

          <CheckboxInput
            label={`Refer Out`}
            id={`refer_outpx`}
            register={register}
          />

          <CheckboxInput
            label={`Upload`}
            id={`upload`}
            register={register}
          />

          <CheckboxInput
            label={`Charts`}
            id={`charts`}
            register={register}
          />

          <CheckboxInput
            label={`Nursing`}
            id={`nursing`}
            register={register}
          />

          <CheckboxInput
            label={`Plan`}
            id={`plan`}
            register={register}
          />
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default AddRoleModal;
