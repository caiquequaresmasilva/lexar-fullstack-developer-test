import { Link } from "react-router-dom"

function Login() {

  return (
    <>
      <h1>Login Page</h1>
      <Link to='/signup'>Sign up</Link>
      <Link to='/home'>Home</Link>
    </>
  )
}

export default Login
