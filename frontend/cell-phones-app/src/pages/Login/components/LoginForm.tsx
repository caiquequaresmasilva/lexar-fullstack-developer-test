import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PasswordRegex, handleForm } from '../../../utils'
import { EmailInput, PasswordInput } from '../../../components'
import { useUserInputs } from '../../../hooks'

type Inputs = {
  email: string,
  password: string
}

function LoginForm() {
  const [{ email, password }, { setEmail, setPassword }] = useUserInputs()
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate('/home')
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const flag = await handleForm<Inputs>({ email, password }, 'Login successful.', '/login')
    setEmail('')
    setPassword('')
    if (flag) {
      navigate('/home')
    }

  }
  return (
    <form className="flex flex-col w-1/2 h-full justify-evenly" onSubmit={handleSubmit}>
      <EmailInput state={email} setState={setEmail} />
      <PasswordInput state={password} setState={setPassword} regex={PasswordRegex} />
      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>Log in</button>
    </form>
  )
}

export default LoginForm