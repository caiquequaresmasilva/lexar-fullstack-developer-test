import { useState } from "react"
import { Link } from "react-router-dom"

import { handleDeleteProduct, handleProductForm } from "../../../utils"

interface ProductProps {
  id: string
  name: string
  brand: string
  model: string
  price: number
  color: string
  colors: Option[]
  refresh: () => void

}

export default function ProductCard({ id, name, brand, model, color, price, refresh, colors }: ProductProps) {
  const [remove, setRemove] = useState(false)
  const [variant, setVariant] = useState(false)
  const [vcolor, setVcolor] = useState(color)
  const [vprice, setVprice] = useState(price)

  const handleDelete = async () => {
    const flag = await handleDeleteProduct(id)
    setRemove(false)
    flag && refresh()
  }

  const handleVariantForm = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('token') || ''
    const flag = await handleProductForm({
      product: {
        name,
        details: {
          brand,
          model,
          color: vcolor
        },
        price: vprice
      },
      message: 'Product variant created',
      token
    })
    setVariant(false)
    flag && refresh()
  }

  return (
    <div className='shadow-md shadow-black bg-slate-900 rounded-lg py-4'>
      <h1>{name}</h1>
      <div>
        <ul>
          <li>Brand: {brand}</li>
          <li>Model: {model}</li>
          <li>Color: {color}</li>
          <li>Price: {price}</li>
        </ul>
      </div>
      <div>
        <Link to={`/home/edit-product/${id}`} className="text-green-500 m-1">EDIT</Link>
        <button className="text-green-500 m-1" onClick={() => setVariant(true)}>ADD VARIANT</button>
        <button className="text-red-500 m-1" onClick={() => setRemove(true)}>DELETE</button>
      </div>
      {/* DELETE MODAL */}
      <div className={`fixed z-50 inset-0 flex justify-center items-center ${remove ? "visible bg-black/90" : "invisible"}`}>
        <div
          className="bg-slate-950 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default"
        >
          <h1>Delete {name}</h1>

          <p>Are you sure you want to delete this product? This action cannot be undone.</p>

          <button onClick={() => setRemove(false)} className="text-white">CANCEL</button>
          <button onClick={handleDelete} className="text-red-500">DELETE</button>

        </div>
      </div>

      {/* ADD VARIANT MODAL */}
      <div className={`fixed z-50 inset-0 flex justify-center items-center ${variant ? "visible bg-black/90" : "invisible"}`}>
        <div
          className="bg-slate-950 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default"
        >
          <div>
            <h1>Create a variant model</h1>
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
          </div>
          <form onSubmit={handleVariantForm}>
            <select name="color" onChange={({ target }) => setVcolor(target.value)} value={vcolor} className="text-black">
              {colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
            </select>


            <input
              type="number"
              name="price"
              min={100}
              placeholder='Price'
              className="text-black"
              value={vprice}
              onChange={(e) => setVprice(Number(e.target.value))}
              required
            />
            <button type="submit">CREATE</button>
          </form>
          <button onClick={() => setVariant(false)} className="text-white">CANCEL</button>

        </div>
      </div>
    </div>
  )
}
