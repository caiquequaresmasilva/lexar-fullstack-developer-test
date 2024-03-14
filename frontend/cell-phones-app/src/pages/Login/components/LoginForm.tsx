import { useNavigate } from 'react-router-dom'
import { EmailInput, PasswordInput } from '../../../components'
import { useUserInputs } from '../../../hooks'
import { useLoginMutation } from '../../../redux/api/userApiSlice'

function LoginForm() {
  const [{ email, password }, { setEmail, setPassword }] = useUserInputs()
  const [loginMutation] = useLoginMutation()
  const navigate = useNavigate()

  const disableButton = () => email === '' || password === ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await loginMutation({ email, password }).unwrap()
    if (!error) {
      navigate('/home')
    } else {
      alert(error)
    }

  }
  return (
    <form className="flex flex-col w-1/2 h-[70%] justify-between" onSubmit={handleSubmit}>
      <EmailInput setState={setEmail} />
      <PasswordInput setState={setPassword} />
      <button className={`rounded py-1 ${disableButton() ? 'bg-green-900 text-zinc-500' : 'text-zinc-50 bg-green-700  hover:bg-green-600'} `} type='submit' disabled={disableButton()}>Log in</button>
    </form>
  )
}

export default LoginForm