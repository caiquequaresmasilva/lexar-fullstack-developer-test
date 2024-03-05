import { Link } from "react-router-dom"

function Signup() {

  return (
    <>
      <h1>Signup Page</h1>
      <Link to='/login'>Log in</Link>
      <Link to='/home'>Home</Link>
    </>
  )
}

export default Signup
