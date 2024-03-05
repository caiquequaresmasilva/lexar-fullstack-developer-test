import { Link } from "react-router-dom"

function Home() {

  return (
    <>
    <h1>Home Page</h1>
    <Link to='/add-product'>Add Product</Link>
    <Link to='/edit-product'>Edit Product</Link>
    </>
  )
}

export default Home
