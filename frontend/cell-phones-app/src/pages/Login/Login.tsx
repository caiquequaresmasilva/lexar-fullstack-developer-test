import { FormContainer } from "../../components"
import LoginForm from "./components/LoginForm"

function Login() {

  return (
    <main className='w-full h-screen px-8 py-16 flex justify-center items-center'>
      <FormContainer linkHref="/signup" linkName="Sign Up">
        {<LoginForm/>}
      </FormContainer>
    </main>
  )
}

export default Login
