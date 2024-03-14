import { useNavigate } from "react-router-dom";
import { useUserInputs } from "../../../hooks";
import { EmailInput, NameInput, PasswordInput } from "../../../components";
import { useCreateUserMutation } from "../../../redux/api/userApiSlice";
import { UserNameRegex } from "../../../utils";

function SignupForm() {
  const [
    { email, name, password },
    { setEmail, setName, setPassword }
  ] = useUserInputs()

  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await createUser({ name, email, password }).unwrap()
    if (!error) {
      navigate("/home");
    } else {
      alert(error)
    }
  };
  return (
    <form className="flex flex-col w-1/2 h-full justify-evenly" onSubmit={handleSubmit}>

      <NameInput state={name} setState={setName} regex={UserNameRegex} />
      <EmailInput state={email} setState={setEmail} />
      <PasswordInput setState={setPassword} />

      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
