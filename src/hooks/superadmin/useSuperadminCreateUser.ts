import {useEffect, useState} from "react";
import {AllCountries, AllStatesAndCities, CreateUserInput} from "../../types/superadmin/formTypes";
import { Country, State, City} from 'country-state-city'

export const useSuperadminCreateUser = () => {
  const [email, setEmail] = useState('Johndoe@gmail.com');
  const [password, setPassword] = useState(``);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('None');
  const [zipCode, setZipCode] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [alternateAddress, setAlternateAddress] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [allCountries, setAllCountries] = useState<AllCountries[] | null>(null);
  const [allCountryStates, setAllCountryStates] = useState<AllStatesAndCities[] | null>(null);
  const [allStateCities, setAllStateCities] = useState<AllStatesAndCities[] | null>(null);
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    setAllCountries(Country.getAllCountries() as AllCountries[])
  }, []);



  // const onUpdateCountryCode = (value:string) => setCountryCode(value)
  //
  // const onUpdateAlternateAddress = (value:string) => setAlternateAddress(value)
  //
  // const onUpdateAddress = (value:string) => setAddress(value)
  //
  // const onUpdateBio = (value:string) => setBio(value)
  //
  // const onUpdateTitle = (value:string) => setTitle(value)
  //
  // const onUpdateDob = (value:string) => setDob(value)
  //
  // const onUpdateGender = (value:string) => setGender(value)
  //
  // const onUpdateRole = (value:string) => setRole(value)
  //
  // const onUpdateZipCode = (value:string) => setZipCode(value)

  const onUpdateCountry = (value:string) => {
    const countryInfo = <AllCountries>Country.getCountryByCode(value)
    setAllCountryStates(State.getStatesOfCountry(value) as AllStatesAndCities[])
    setCountry(countryInfo?.name)
    setPhoneCode(countryInfo?.flag)
    setCountryCode(countryInfo?.isoCode)
  }

  const onUpdateState = (value:string) => {
    setAllStateCities(City.getCitiesOfState(countryCode, value) as AllStatesAndCities[])
    setState(value)
  }

  const onUpdateCity = (value:string) => setCity(value ?? 'None')

  // const onUpdateMiddleName = (value:string) => setMiddleName(value)
  //
  // const onUpdateLastName = (value:string) => setLastName(value)

  const onUpdatePhoneNumber = (value:string) => setPhoneNumber(value)

  // const onUpdateFirstName = (value:string) => setFirstName(value)
  //
  // const onUpdateUsername = (value:string) => setUsername(value)
  //
  // const onUpdatePassword = (value:string) => setPassword(value)
  //
  // const onUpdateEmail = (value:string) => setEmail(value)

  const handleCreateAdmin = async (data:CreateUserInput) => {
    console.log("SUBMIT FORM HERE")
    console.log(data)
  }

  return {
    // Values
    allCountries,
    phoneNumber,
    phoneCode,
    allCountryStates,
    allStateCities,

    // onUpdateEmail,
    // onUpdateFirstName,
    // onUpdateLastName,
    handleCreateAdmin,
    onUpdateCountry,
    onUpdatePhoneNumber,
    onUpdateState,
    onUpdateCity,
  }
}

export default useSuperadminCreateUser;