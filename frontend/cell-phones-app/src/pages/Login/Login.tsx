import { useEffect } from "react"
import { FormContainer } from "../../components"
import LoginForm from "./components/LoginForm"
import { useAppDispatch } from "../../redux/hooks"
import { setToken } from "../../redux/authSlice"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(setToken(token))
      navigate('/home')
    }
  })

  return (
    <main className='w-full h-screen px-8 py-16 flex justify-center items-center'>
      <FormContainer linkHref="/signup" linkName="Sign Up">
        {<LoginForm />}
      </FormContainer>
    </main>
  )
}

export default Login
