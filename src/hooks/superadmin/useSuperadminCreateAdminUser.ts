import { useEffect, useState } from 'react';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import { CreateAdminUserInput } from '../../types/superadmin/forms';
import { SelectInputFieldProps } from '../../types/common';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import { axiosGetRequest, axiosPostRequest } from '../../lib/axios';
import { AllCountries } from '../../types/superadmin/formTypes';

interface DepartmentRoleProps {
  name: string;
  description?: string;
  id?: string;
}

export const useSuperadminCreateAdminUser = () => {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [profileImgURL, setProfileImgURL] = useState('');

  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allDepartments, setAllDepartments] = useState<SelectInputFieldProps[]>(
    []
  );
  const [allRoles, setAllRoles] = useState<SelectInputFieldProps[]>([]);
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    let countriesUpdate: SelectInputFieldProps[] = [],
      rolesList: SelectInputFieldProps[] = [],
      departmentsList: SelectInputFieldProps[] = [];
    Country.getAllCountries().map((country) => {
      countriesUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countriesUpdate);

    // const superadminGetRolesAndDepartments = async () => {
    //   const response = <AccountServiceApiResponse>(
    //     await axiosGetRequest('/account/super-admin/get/available-admin/roles_and_departments', {
    //       siteId
    //     })
    //   );
    //   if (response?.success) {
    //     response?.data?.department?.map((item: DepartmentRoleProps) => {
    //       departmentsList.push({
    //         placeholder: item.name,
    //         value: item.id ?? '',
    //       });
    //     });
    //
    //     response?.data?.role?.map((item: DepartmentRoleProps) => {
    //       rolesList.push({
    //         placeholder: item.name,
    //         value: item.name,
    //       });
    //     });
    //
    //     setAllDepartments(departmentsList);
    //     setAllRoles(rolesList);
    //   } else {
    //     toast.error(response?.message);
    //   }
    // };
    // superadminGetRolesAndDepartments().catch((err) => {
    //   toast.error(err?.message);
    // });
  }, [siteId]);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  const handleCreateAdmin = async (data: CreateAdminUserInput) => {
    const adminData = {
      ...data,
      country,
      country_code: countryCode,
      profile_pic: profileImgURL,
      siteId,
      phone: `+${phoneCode}${data?.phone}`,
    };

    console.log(adminData);

    const { success, message } = await axiosPostRequest(
      '/account/admin/create-admin',
      adminData
    );

    if (success) toast.success(message);
    else toast.error(message);
  };

  const rerouteToURL = (url: string) => {
    navigate(url);
  };

  return {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allDepartments,
    allRoles,
    profileImgURL,

    handleCreateAdmin,
    onUpdateCountry,
    setProfileImgURL,
    rerouteToURL,
  };
};
