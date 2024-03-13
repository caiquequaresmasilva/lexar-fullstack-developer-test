import { Link, Outlet, useLocation} from "react-router-dom";
import { useValidateToken } from "../hooks";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/authSlice";

export default function Header() {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  useValidateToken()

  const signOut = () => {
    dispatch(logout())
  }

  return (
    <>
      <header className="w-full flex justify-between text-zinc-100 p-4">
        <div>
          <Link className={`mr-4 hover:text-green-500 ${pathname == '/home' && 'text-green-500'}`} to='/home'> HOME</Link>
          <Link className={`mr-4 hover:text-green-500 ${pathname == '/home/add-product' && 'text-green-500'}`} to='/home/add-product'>ADD PRODUCT</Link>
        </div>
        <div className="flex">
          <button onClick={signOut} className="mr-4 hover:text-green-500">SIGN OUT</button>
        </div>
      </header>
      <Outlet />
    </>

  )
}
