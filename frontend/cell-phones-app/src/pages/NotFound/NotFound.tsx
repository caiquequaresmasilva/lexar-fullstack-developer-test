import { Link } from "react-router-dom"

function NotFound() {

  return (
    <main className='w-full h-screen px-8 py-16 flex flex-col justify-center items-center'>
      <h1 className="text-6xl text-zinc-200 font-bold">Page not found!</h1>
      <Link className="text-xl mt-2 text-green-500" to='/home'>Home</Link>
    </main>

  )
}

export default NotFound
