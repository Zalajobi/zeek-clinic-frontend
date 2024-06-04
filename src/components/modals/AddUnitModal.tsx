import React, { Fragment } from 'react';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  CustomTextAreaInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { useForm } from 'react-hook-form';
import { CreateUnitInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateUnitInputSchema } from '@typeSpec/forms';
import { useAddUnitModal } from '@hooks/modals/useAddUnitModal';

interface AddUnitModalProps {
  open: boolean;
  handler: () => void;
}

const AddUnitModal = ({ open, handler }: AddUnitModalProps) => {
  const { createUnit } = useAddUnitModal(handler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUnitInput>({
    resolver: yupResolver(CreateUnitInputSchema),
  });

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add Unit'}
        handler={handler}
        size={'lg'}
        open={open}
        footer={
          <Fragment>
            <OutlinedButton
              text={`Cancel`}
              type={`danger`}
              click={handler}
            />

            <OutlinedButton
              click={handleSubmit(createUnit)}
              text={`Confirm`}
              type={`secondary`}
            />
          </Fragment>
        }>
        <div className={`p-6 grid grid-cols-1 gap-4 md:grid-cols-2`}>
          {/*Unit Name*/}
          <TextInput
            label={`Unit Name`}
            className={`my-3`}
            id={'name'}
            errorMsg={errors.name?.message ?? ''}
            type={'text'}
            register={register}
          />

          {/*Total Beds*/}
          <TextInput
            label={`Total Beds`}
            className={`my-3`}
            id={'totalBeds'}
            errorMsg={errors.totalBeds?.message ?? ''}
            type={'number'}
            register={register}
          />

          {/*Unit Description*/}
          <CustomTextAreaInput
            label={`Description`}
            className={`my-3 col-span-2`}
            id={'description'}
            errorMsg={errors.description?.message ?? ''}
            register={register}
            size={'lg'}
          />
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default AddUnitModal;
