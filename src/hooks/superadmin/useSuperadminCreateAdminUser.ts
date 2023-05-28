import {useEffect, useState} from "react";
import {AllCountries, AllStatesAndCities, CreateUserInput} from "../../types/superadmin/formTypes";
import { Country, State, City} from 'country-state-city'
import {axiosGetRequest, axiosPostRequest} from "../../lib/axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const useSuperadminCreateAdminUser = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('None');
  const [countryCode, setCountryCode] = useState('');
  const [profileImgURL, setProfileImgURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>('');

  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);
  const [allCountryStates, setAllCountryStates] = useState<AllStatesAndCities[] | null>(null);
  const [allStateCities, setAllStateCities] = useState<AllStatesAndCities[] | null>(null);
  const [allDepartments, setAllDepartments] = useState<string[]>([]);
  const [allRoles, setAllRoles] = useState<string[]>([]);
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[])

    const superadminGetRolesAndDepartments = async () => {
      const response = await axiosGetRequest('/account/super-admin/create/roles_and_departments')
      const allDepartments:string[] = []
      const allRoles:string[] = []

      if (response?.success) {
        for (const dept in response?.data?.department) {
          allDepartments.push(dept)
        }

        for (const role in response?.data?.role)  {
          allRoles.push(role)
        }
      } else {
        toast.error(response?.message)
        navigate('/superadmin/login')
      }

      setAllDepartments(allDepartments)
      setAllRoles(allRoles)
    }
    superadminGetRolesAndDepartments()
      .catch(err => {
        navigate('/superadmin/login')
      })
  }, [navigate]);


  const onUpdateCountry = (value:string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries
    setAllCountryStates(State.getStatesOfCountry(value) as unknown as AllStatesAndCities[])
    console.log(State.getStatesOfCountry(value))
    setCountry(countryInfo?.name)
    setPhoneCode(countryInfo?.phonecode)
    setCountryCode(countryInfo?.isoCode)
  }

  const onUpdateState = (value:string) => {
    setAllStateCities(City.getCitiesOfState(countryCode, value) as unknown as AllStatesAndCities[])
    setState(value)
  }

  const onUpdateCity = (value:string) => setCity(value ?? 'None')

  const onUpdatePhoneNumber = (value:string | number) => setPhoneNumber(value)

  const handleCreateAdmin = async (data:CreateUserInput) => {
    const adminData = {
      ...data,
      country,
      city,
      state,
      country_code: countryCode,
      call_code: phoneCode,
      profile_img_url: profileImgURL,
      phone_number: phoneNumber
    }

    const {success, message} = await axiosPostRequest('/account/super-admin/create/admin', adminData, localStorage.getItem('token') as string)

    if (success)
      toast.success(message)
    else
      toast.error(message)
  }

  return {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,
    profileImgURL,

    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
    setProfileImgURL,
    onUpdatePhoneNumber,
  }
}
