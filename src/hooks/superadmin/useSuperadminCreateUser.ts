import {useState} from "react";
import {axiosPostRequestNoAuth} from "../../lib/axios";
import toast from 'react-hot-toast';

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



  const onUpdateCountryCode = (value:string) => setCountryCode(value)

  const onUpdateAlternateAddress = (value:string) => setAlternateAddress(value)

  const onUpdateAddress = (value:string) => setAddress(value)

  const onUpdateBio = (value:string) => setBio(value)

  const onUpdateTitle = (value:string) => setTitle(value)

  const onUpdateDob = (value:string) => setDob(value)

  const onUpdateGender = (value:string) => setGender(value)

  const onUpdateRole = (value:string) => setRole(value)

  const onUpdateZipCode = (value:string) => setZipCode(value)

  const onUpdateState = (value:string) => setState(value)

  const onUpdateCountry = (value:string) => setCountry(value)

  const onUpdateMiddleName = (value:string) => setMiddleName(value)

  const onUpdateLastName = (value:string) => setLastName(value)

  const onUpdatePhoneNumber = (value:string) => setPhoneNumber(value)

  const onUpdateFirstName = (value:string) => setFirstName(value)

  const onUpdateUsername = (value:string) => setUsername(value)

  const onUpdatePassword = (value:string) => setPassword(value)

  const onUpdateEmail = (value:string) => setEmail(value)

  const handleLogin = async () => {
    const response = await axiosPostRequestNoAuth('/account/admin/login', {
      email,
      password
    })

    if (response?.success) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message)
    }

    console.log(response)
  }

  return {
    // Values
    firstName,
    email,

    handleLogin,
    onUpdateEmail,
    onUpdateFirstName,
    onUpdateLastName,
  }
}

export default useSuperadminCreateUser;