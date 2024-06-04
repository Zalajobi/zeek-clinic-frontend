import { useAddDepartmentModal } from '@hooks/modals/useAddDepartmentModal';
import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  CustomTextAreaInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { useForm } from 'react-hook-form';
import { CreateDepartmentInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateDepartmentInputSchema } from '@typeSpec/forms';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { ExcelFileUpload } from '@components/global/formInput/FileUpload';

interface AddDepartmentModalProps {
  open: boolean;
  handler: () => void;
}

export const AddDepartmentModal = ({
  open,
  handler,
}: AddDepartmentModalProps) => {
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

export const CreateBulkDepartmentModal = ({
  open,
  handler,
}: AddDepartmentModalProps) => {
  const {
    // Values
    headers,
    fileUploaded,

    // Functions
    setDepartmentName,
    setDepartmentDescription,
    processedExcelFile,
    handleCreateBulkDepartment,
  } = useAddDepartmentModal(handler);

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
              change={setDepartmentName}
              id={'name'}
            />

            {/*Description*/}
            <SelectInput
              label={`Service-Area Description`}
              options={headers}
              className={`my-3`}
              change={setDepartmentDescription}
              id={'Description'}
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
            click={handleCreateBulkDepartment}
            text={`Confirm`}
            type={`secondary`}
            disabled={!fileUploaded}
          />
        </div>
      </DialogFooter>
    </Dialog>
  );
};
