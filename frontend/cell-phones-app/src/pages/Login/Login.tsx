import { FormContainer } from "../../components"
import LoginForm from "./components/LoginForm"

function Login() {

  return (
    <main>
      <FormContainer linkHref="/signup" linkName="Sign Up">
        {<LoginForm/>}
      </FormContainer>
    </main>
  )
}

export default Login
