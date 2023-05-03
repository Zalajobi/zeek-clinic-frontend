import {useEffect, useState} from "react";
import {AllCountries, AllStatesAndCities, CreateUserInput} from "../../types/superadmin/formTypes";
import { Country, State, City} from 'country-state-city'
import {axiosGetRequest} from "../../lib/axios";

export const useSuperadminCreateAdminUser = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('None');
  const [countryCode, setCountryCode] = useState('');

  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);
  const [allCountryStates, setAllCountryStates] = useState<AllStatesAndCities[] | null>(null);
  const [allStateCities, setAllStateCities] = useState<AllStatesAndCities[] | null>(null);
  const [allDepartments, setAllDepartments] = useState<string[]>([]);
  const [allRoles, setAllRoles] = useState<string[]>([]);
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[])
    superadminGetRolesAndDepartments().then(r => console.log(`HELLO THERE`))
  }, []);


  const superadminGetRolesAndDepartments = async () => {
    const response = await axiosGetRequest('/account/super-admin/create/roles_and_departments')
    const allDepartments:string[] = []
    const allRoles:string[] = []

    if (response.success) {
      for (const dept in response?.data?.department) {
        allDepartments.push(dept)
      }

      for (const role in response?.data?.role)  {
        allRoles.push(role)
      }
    }

    setAllDepartments(allDepartments)
    setAllRoles(allRoles)
  }

  const onUpdateCountry = (value:string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries
    setAllCountryStates(State.getStatesOfCountry(value) as AllStatesAndCities[])
    setCountry(countryInfo?.name)
    setPhoneCode(countryInfo?.phonecode)
    setCountryCode(countryInfo?.isoCode)
  }

  const onUpdateState = (value:string) => {
    setAllStateCities(City.getCitiesOfState(countryCode, value) as AllStatesAndCities[])
    setState(value)
  }

  const onUpdateCity = (value:string) => setCity(value ?? 'None')

  const handleCreateAdmin = async (data:CreateUserInput) => {
    const adminData = {
      ...data,
      country,
      city,
      state,
      countryCode
    }
    console.log("SUBMIT FORM HERE")
    console.log(adminData)
  }

  return {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,

    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
  }
}
