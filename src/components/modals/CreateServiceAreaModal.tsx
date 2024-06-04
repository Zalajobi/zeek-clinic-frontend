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
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { ExcelFileUpload } from '@components/global/formInput/FileUpload';

interface CreateServiceAreaModalProps {
  open: boolean;
  handler: () => void;
}

export const CreateServiceAreaModal = ({
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

export const CreateBulkServiceArea = ({
  open,
  handler,
}: CreateServiceAreaModalProps) => {
  const {
    // Values
    headers,
    fileUploaded,

    // Functions
    processedExcelFile,
    setServiceAreaName,
    setServiceAreaDescription,
    setServiceAreaType,
    handleCreateBulkServiceArea,
  } = useCreateServiceAreaModal(handler);

  return (
    <Dialog
      open={open}
      size="lg"
      handler={handler}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="overflow-x-hidden overflow-y-scroll p-6 min-h-[500px]">
      <DialogBody>
        <ExcelFileUpload processedData={processedExcelFile} />

        {fileUploaded && (
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 mt-10">
            {/*Name*/}
            <SelectInput
              label={`Service-Area Name`}
              options={headers}
              className={`my-3`}
              change={setServiceAreaName}
              id={'name'}
            />

            {/*Description*/}
            <SelectInput
              label={`Service-Area Description`}
              options={headers}
              className={`my-3`}
              change={setServiceAreaDescription}
              id={'Description'}
            />

            {/*Type*/}
            <SelectInput
              label={`Service-Area Type`}
              options={headers}
              className={`my-3`}
              change={setServiceAreaType}
              id={'Type'}
            />
          </div>
        )}
      </DialogBody>

      {/*Modal Footer */}
      <DialogFooter className={`h-[100px] border-0`}>
        <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 gap-4">
          <OutlinedButton
            text={`Cancel`}
            type={`danger`}
            click={handler}
          />

          <OutlinedButton
            click={handleCreateBulkServiceArea}
            text={`Confirm`}
            type={`secondary`}
            disabled={!fileUploaded}
          />
        </div>
      </DialogFooter>
    </Dialog>
  );
};
