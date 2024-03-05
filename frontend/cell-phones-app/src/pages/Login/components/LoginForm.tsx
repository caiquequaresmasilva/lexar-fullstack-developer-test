import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleForm } from '../../../utils'

type Inputs = {
  email: string,
  password: string
}

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
          title='The password must contain at least 8 characters, with uppercase letters, lowercase letters and numbers.'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Log in</button>
    </form>
  )
}

export default LoginForm