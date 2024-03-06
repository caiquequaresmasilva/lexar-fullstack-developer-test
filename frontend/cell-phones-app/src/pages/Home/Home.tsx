import { Link } from "react-router-dom"

function Home() {

  return (
    <main className="w-full h-screen text-[#FFFFFFD6]">
      <h1>Home Page</h1>
      <Link to='/home/edit-product/42'>Edit Product</Link>
      <div>
        <button>SEARCH</button>
        <button>FILTER</button>
      </div>
    </main>
  )
}

export default Home
