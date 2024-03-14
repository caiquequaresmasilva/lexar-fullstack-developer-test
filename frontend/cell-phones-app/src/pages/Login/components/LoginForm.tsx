import { useNavigate } from 'react-router-dom'
import { EmailInput, PasswordInput } from '../../../components'
import { useUserInputs } from '../../../hooks'
import { useLoginMutation } from '../../../redux/api/userApiSlice'

function LoginForm() {
  const [{ email, password }, { setEmail, setPassword }] = useUserInputs()
  const [loginMutation] = useLoginMutation()
  const navigate = useNavigate()

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
    <form className="flex flex-col w-1/2 h-full justify-evenly" onSubmit={handleSubmit}>
      <EmailInput setState={setEmail} />
      <PasswordInput setState={setPassword} />
      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>Log in</button>
    </form>
  )
}

export default LoginForm