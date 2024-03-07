import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    setUser(localStorage.getItem('user') || 'unknown')
  },[])
  return (
    <>
      <header className="w-full flex justify-between text-zinc-100 p-4">
        <div>
          <Link className={`mr-4 hover:text-green-600 ${pathname == '/home' && 'text-green-600'}`} to='/home'> HOME</Link>
          <Link className={`mr-4 hover:text-green-600 ${pathname == '/home/add-product' && 'text-green-600'}`} to='/home/add-product'>ADD PRODUCT</Link>
        </div>

        <div className="bg-green-800 p-3 rounded-full flex w-fit">
          <p>Welcome, {user} !</p>
        </div>
      </header>
      <Outlet />
    </>

  )
}
