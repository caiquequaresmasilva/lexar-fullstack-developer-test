import { Navigate, Route, Routes } from "react-router-dom"
import { AddProduct, EditProduct, Home, Login, NotFound, Signup } from "./pages"
import { Header } from "./components"

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/home" element={<Header />}>
        <Route index element={<Home />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path='edit-product/:id' element={<EditProduct />} />
      </Route>
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default App
