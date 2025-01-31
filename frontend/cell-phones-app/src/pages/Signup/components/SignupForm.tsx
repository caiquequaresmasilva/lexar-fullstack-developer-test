import { useNavigate } from "react-router-dom";
import { useUserInputs } from "../../../hooks";
import { EmailInput, NameInput, PasswordInput } from "../../../components";
import { useCreateUserMutation } from "../../../redux/api/userApiSlice";
import { UserNameRegex } from "../../../utils";
import { useState } from "react";

function SignupForm() {
  const [
    { email, name, password },
    { setEmail, setName, setPassword }
  ] = useUserInputs()
  const [errorMsg, setErrorMsg] = useState('')

  const disableButton = () => email === '' || password === '' || name === ''

  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser({ name, email, password }).unwrap()
      navigate("/home");
    } catch (e) {
      setErrorMsg((e as ApiError).data.error)
    }
    
  };
  return (
    <form className="flex flex-col w-1/2 h-full justify-evenly" onSubmit={handleSubmit}>

      <NameInput state={name} setState={setName} regex={UserNameRegex} />
      <EmailInput state={email} setState={setEmail} />
      <PasswordInput setState={setPassword} />

      <button className={`rounded py-1 ${disableButton() ? 'bg-green-900 text-zinc-500' : 'text-zinc-50 bg-green-700  hover:bg-green-600'} `} type='submit' disabled={disableButton()}>Sign up</button>
      <p className="text-red-500 text-sm my-2">{errorMsg}</p>
    </form>
  );
}

export default SignupForm;
