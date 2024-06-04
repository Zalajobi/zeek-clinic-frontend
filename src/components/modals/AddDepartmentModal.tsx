import { useAddDepartmentModal } from '@hooks/modals/useAddDepartmentModal';
import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  CustomTextAreaInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { useForm } from 'react-hook-form';
import { CreateDepartmentInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateDepartmentInputSchema } from '@typeSpec/forms';

interface AddProviderModalProps {
  open: boolean;
  handler: () => void;
}

const AddDepartmentModal = ({ open, handler }: AddProviderModalProps) => {
  const { createDepartment } = useAddDepartmentModal(handler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDepartmentInput>({
    resolver: yupResolver(CreateDepartmentInputSchema),
  });

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add Department'}
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
              click={handleSubmit(createDepartment)}
              text={`Confirm`}
              type={`secondary`}
            />
          </Fragment>
        }>
        <div
          className={`p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%] mb-4 `}>
          {/*Department Name*/}
          <TextInput
            label={`Department Name`}
            className={`my-3`}
            id={'name'}
            errorMsg={errors.name?.message ?? ''}
            type={'text'}
            register={register}
          />

          {/*Department Description*/}
          <CustomTextAreaInput
            label={`Description`}
            className={`my-3`}
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

export default AddDepartmentModal;
