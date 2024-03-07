import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { handleProductForm } from "../utils"

type Action = 'UPDATE' | 'CREATE'
type Method = 'POST' | 'PUT'

type MethodMap = {
  [index in Action]: Method
}

interface EditFormProps {
  product?: Product,
  action: Action
  message?: string
  brands: Option[]
  colors: Option[]
}
export default function EditForm({ product, action, message, brands, colors }: EditFormProps) {
  const [name, setName] = useState(product?.name || '')
  const [brand, setBrand] = useState(product?.brand || brands[0].name)
  const [color, setColor] = useState(product?.color || colors[0].name)
  const [model, setModel] = useState(product?.model || '')
  const [price, setPrice] = useState(product?.price || 100)

  const navigate = useNavigate()
  const methodMap: MethodMap = {
    UPDATE: "PUT",
    CREATE: "POST"
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('token') || ''
    const flag = await handleProductForm({
      product: {
        name,
        brand,
        model,
        color,
        price
      },
      method: methodMap[action],
      message: message || '',
      id: product?.id || '',
      token
    })
    if (flag) {
      navigate('/home')
    }
  }

  return (

    <form className="flex flex-col w-1/2 h-full justify-between text-white" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black"
        min={3}
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="edit-brand-select">
        Brand:
        <select className="text-black ml-4" id="edit-brand-select" name="brand" onChange={({ target }) => setBrand(target.value)} value={brand}>
          {brands.map(({ id, name }) => (<option key={id}>{name}</option>))}
        </select>
      </label>



      <input
        type="text"
        name="model"
        className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black"
        min={3}
        placeholder='Model'
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
      />

      <label htmlFor="edit-color-select">
        Color:
        <select className="text-black ml-4" id="edit-color-select" name="color" onChange={({ target }) => setColor(target.value)} value={color}>
          {colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
        </select>
      </label>


      <label htmlFor="edit-price-input">
        Price:
        <input
          type="number"
          id="edit-price-input"
          className="ml-4 text-black"
          name="price"
          min={100}
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </label>



      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>{action}</button>
    </form>

  )
}
