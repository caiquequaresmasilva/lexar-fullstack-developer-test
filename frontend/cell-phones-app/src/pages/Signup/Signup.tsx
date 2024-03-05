import { FormContainer } from "../../components"
import { SignupForm } from "./components"

function Signup() {

  return (
    <main>
      <FormContainer linkHref="/login" linkName="Log in">
        {<SignupForm />}
      </FormContainer>
    </main>
  )
}

export default Signup
