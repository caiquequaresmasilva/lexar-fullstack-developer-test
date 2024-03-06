import { Link } from "react-router-dom"

function Home() {

  return (
    <main>
      <h1>Home Page</h1>
      <Link to='/home/edit-product/42'>Edit Product</Link>
    </main>
  )
}

export default Home
