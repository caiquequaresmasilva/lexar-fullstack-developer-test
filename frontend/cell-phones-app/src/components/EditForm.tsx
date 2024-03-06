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
}
export default function EditForm({ product, action, message }: EditFormProps) {
  const [name, setName] = useState(product?.name || '')
  const [brand, setBrand] = useState(product?.brand || '')
  const [color, setColor] = useState(product?.color || '')
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            min={3}
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            name="brand"
            min={3}
            placeholder='Brand'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
          <input
            type="text"
            name="model"
            min={3}
            placeholder='Model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
          <input
            type="text"
            name="color"
            min={3}
            placeholder='Color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <input
            type="number"
            name="price"
            min={100}
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />

        </div>
        <button type='submit'>{action}</button>
      </form>
    </div>
  )
}
