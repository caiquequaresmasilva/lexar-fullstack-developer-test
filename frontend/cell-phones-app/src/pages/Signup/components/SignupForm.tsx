import { useNavigate } from "react-router-dom";
import { PasswordRegex, UserRegex } from "../../../utils";
import { useUserInputs } from "../../../hooks";
import { EmailInput, NameInput, PasswordInput } from "../../../components";
import { useCreateUserMutation } from "../../../redux/api/userApiSlice";

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

      <NameInput state={name} setState={setName} regex={UserRegex} />
      <EmailInput state={email} setState={setEmail} />
      <PasswordInput state={password} setState={setPassword} regex={PasswordRegex} />

      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
