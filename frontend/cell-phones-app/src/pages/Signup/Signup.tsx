import { FormContainer } from "../../components"
import { SignupForm } from "./components"

function Signup() {

  return (
    <main className='w-full h-screen px-8 py-16 flex justify-center items-center'>
      <FormContainer linkHref="/login" linkName="Log in">
        {<SignupForm />}
      </FormContainer>
    </main>
  )
}

export default Signup
