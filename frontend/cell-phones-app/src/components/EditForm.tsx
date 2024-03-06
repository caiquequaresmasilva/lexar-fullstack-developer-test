import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { handleProductForm } from "../utils"

type Action = 'UPDATE' | 'CREATE'

interface EditFormProps {
  product: Product,
  action: Action
}
export default function EditForm({ product, action }: EditFormProps) {
  const [name, setName] = useState(product.name)
  const [brand, setBrand] = useState(product.brand)
  const [color, setColor] = useState(product.color)
  const [model, setModel] = useState(product.model)
  const [price, setPrice] = useState(product.price)

  const navigate = useNavigate()

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
      method: 'PUT',
      message: 'Product updated',
      id: product.id,
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
