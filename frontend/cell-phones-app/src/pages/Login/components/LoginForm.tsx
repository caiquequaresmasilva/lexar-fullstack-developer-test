import { useNavigate } from 'react-router-dom'
import { EmailInput, PasswordInput } from '../../../components'
import { useUserInputs } from '../../../hooks'
import { useLoginMutation } from '../../../redux/api/userApiSlice'
import { useState } from 'react'

function LoginForm() {
  const [{ email, password }, { setEmail, setPassword }] = useUserInputs()
  const [errorMsg, setErrorMsg] = useState('')
  const [loginMutation] = useLoginMutation()
  const navigate = useNavigate()

  const disableButton = () => email === '' || password === ''

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await loginMutation({ email, password }).unwrap()
      navigate('/home')
    } catch (e) {
      setErrorMsg((e as ApiError).data.error)
    }

  }
  return (
    <form className="flex flex-col w-1/2 h-[70%] justify-between" onSubmit={handleSubmit}>
      <EmailInput setState={setEmail} />
      <PasswordInput setState={setPassword} />
      <button className={`rounded py-1 ${disableButton() ? 'bg-green-900 text-zinc-500' : 'text-zinc-50 bg-green-700  hover:bg-green-600'} `} type='submit' disabled={disableButton()}>Log in</button>
      <p className="text-red-500 text-sm my-2">{errorMsg}</p>
    </form>
  )
}

export default LoginForm