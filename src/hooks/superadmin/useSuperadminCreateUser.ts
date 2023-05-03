import {useEffect, useState} from "react";
import {AllCountries, AllStates, CreateUserInput} from "../../types/superadmin/formTypes";
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
  const [allCountryStates, setAllCountryStates] = useState<AllStates[] | null>(null);
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

  const onUpdateState = (value:string) => {
    setState(value)
  }

  const onUpdateCountry = (value:string) => {
    const countryInfo = <AllCountries>Country.getCountryByCode(value)
    // setPhoneNumber(phoneNumber.replace(/[(0-9)]/g, countryInfo.phonecode))
    setCountry(countryInfo?.name)
    // setPhoneCode(`${countryInfo?.flag} ${countryInfo?.phonecode}`)
    setPhoneCode(countryInfo?.flag)
  }

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

    // onUpdateEmail,
    // onUpdateFirstName,
    // onUpdateLastName,
    handleCreateAdmin,
    onUpdateCountry,
    onUpdatePhoneNumber,
  }
}

export default useSuperadminCreateUser;