import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState('')

  useEffect(() => {
    setUser(localStorage.getItem('user') || 'unknown')
  })
  return (
    <>
      <header className="w-full flex justify-between bg-[#1A1B1C] text-[#FFFFFFD6] p-4">
        <span>LEXART</span>
        <Link className="mx-1" to='/home/add-product'>ADD PRODUCT</Link>
        <Link className="mx-1" to='/home'> HOME</Link>
        <span>{user}</span>
      </header>
      <Outlet />
    </>

  )
}
