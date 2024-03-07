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
    <div className='shadow-md shadow-black bg-green-100 rounded-lg py-4'>
      <h1 className="font-extrabold text-xl">{name}</h1>
      <div className="flex flex-col items-start pl-4 text-lg">
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Color: {color}</p>
        <p>Price: {price}</p>
      </div>
      <div className="flex justify-evenly">
        <Link to={`/home/edit-product/${id}`} className="text-green-900 m-1 font-bold hover:text-green-500">EDIT</Link>
        <button className="text-green-900 m-1 font-bold hover:text-green-500" onClick={() => setVariant(true)}>ADD VARIANT</button>
        <button className="text-red-900 m-1 font-bold hover:text-red-500" onClick={() => setRemove(true)}>DELETE</button>
      </div>
      {/* DELETE MODAL */}
      <div className={`fixed z-50 inset-0 flex justify-center items-center ${remove ? "visible bg-black/90" : "invisible"}`}>
        <div
          className="bg-green-100 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default"
        >
          <h1 className="text-xl font-bold">Deleting {name}</h1>

          <p className="text-lg">Are you sure you want to delete this product? This action cannot be undone.</p>

          <button onClick={() => setRemove(false)} className="text-green-900 font-bold hover:text-green-500">CANCEL</button>
          <button onClick={handleDelete} className="text-red-900 font-bold hover:text-red-500">DELETE</button>

        </div>
      </div>

      {/* ADD VARIANT MODAL */}
      <div className={`fixed z-50 inset-0 flex justify-center items-center ${variant ? "visible bg-black/90" : "invisible"}`}>
        <div
          className="bg-green-100 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default"
        >
          <div className="flex flex-col items-center justify-between h-1/2 text-lg">
            <h1 className="text-xl font-bold">Create a variant model</h1>
            <h2>{name}</h2>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
          </div>
          <form className="flex flex-col items-center justify-center"  onSubmit={handleVariantForm}>
            <label htmlFor="variant-color-select" className="font-semibold">
              Color:
              <select id="variant-color-select" name="color" onChange={({ target }) => setVcolor(target.value)} value={vcolor} className="text-black m-2">
                {colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>
            </label>


            <label htmlFor="variant-price-input" className="font-semibold">
              Price:
              <input
                type="number"
                id="variant-price-input"
                name="price"
                min={100}
                placeholder='Price'
                className="text-black w-[30%] m-2"
                value={vprice}
                onChange={(e) => setVprice(Number(e.target.value))}
                required
              />
            </label>

            <button className="text-green-900 font-bold hover:text-green-500" type="submit">CREATE</button>
          </form>
          <button onClick={() => setVariant(false)} className="text-red-900 font-bold hover:text-red-500">CANCEL</button>

        </div>
      </div>
    </div>
  )
}
