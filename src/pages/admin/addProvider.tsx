import { Fragment } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import useAdminAddProvider from '../../hooks/admin/useAdminAddProvider';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import Typography from '../../components/global/Typography';
import ImageUpload from '../../components/global/input/ImageUpload';
import {
  SelectInput,
  TextInput,
} from '../../components/global/input/CustomInput';

export const AddProvider = () => {
  const {
    // Values
    hello,
    profilePic,
    firstName,
    firstNameError,
    userTitle,
    titleList,

    // Functions
    setProfilePic,
    onUpdateFirstName,
    onSubmit,
    onUpdateTitle,
  } = useAdminAddProvider();

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <div className={`flex w-full items-start`}>
            <Typography
              text={`Add New Provider`}
              Tag={`h2`}
            />
          </div>

          <div
            className={`grid grid-col-1 w-full h-full shadow-2xl p-6 my-6 gap-4 lg:grid-cols-4`}>
            <ImageUpload
              bucketFolder={`/hospital_image`}
              url={profilePic}
              updateImageUrl={setProfilePic}
            />

            <div
              className={`w-full grid grid-cols-1 gap-4 items-center lg:grid-cols-4 lg:col-span-3`}>
              <SelectInput
                change={onUpdateTitle}
                label={`Title`}
                options={titleList}
                className={`lg:col-span-2`}
              />

              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
                isError={firstNameError}
                icon={
                  <BsSuitHeartFill
                    className={`mr-2`}
                    size={10}
                  />
                }
              />

              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
              />

              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
              />
              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
              />
              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
              />
              <TextInput
                value={firstName}
                change={onUpdateFirstName}
                label={`First Name`}
                className={`lg:col-span-2`}
              />
            </div>

            <button onClick={onSubmit}>Submit</button>
          </div>
          <h1>{hello}</h1>
          <h1>{hello}</h1>
          <h1>{hello}</h1>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AddProvider;
