import React, { Fragment } from 'react';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  CustomTextAreaInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { useForm } from 'react-hook-form';
import { CreateServiceAreaInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateServiceAreaInputSchema } from '@typeSpec/forms';
import { useCreateServiceAreaModal } from '@hooks/modals/useCreateServiceAreaModal';

interface CreateServiceAreaModalProps {
  open: boolean;
  handler: () => void;
}

const CreateServiceAreaModal = ({
  open,
  handler,
}: CreateServiceAreaModalProps) => {
  const { serviceAreaInputs, createServiceArea } =
    useCreateServiceAreaModal(handler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateServiceAreaInput>({
    resolver: yupResolver(CreateServiceAreaInputSchema),
  });

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add Service Area'}
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
              click={handleSubmit(createServiceArea)}
              text={`Confirm`}
              type={`secondary`}
            />
          </Fragment>
        }>
        <div className={`p-6 grid grid-cols-1 gap-4 md:grid-cols-2`}>
          {/*Unit Name*/}
          <TextInput
            label={`Area Name`}
            className={`my-3`}
            id={'name'}
            errorMsg={errors.name?.message ?? ''}
            type={'text'}
            register={register}
          />

          {/*Type*/}
          <SelectInput
            label={`Area Type`}
            options={serviceAreaInputs}
            className={`my-3`}
            register={register}
            id={'type'}
            errorMsg={errors.type?.message ?? ''}
          />

          {/*Service-Area Description*/}
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

export default CreateServiceAreaModal;
