import { useState } from "react"
import { handleProductForm } from "../../../utils"


interface BulkAddProps {
  brands: Option[]
  colors: Option[]
}

type BulkType = {
  [index: string]: ProductType3
}

export default function BulkAddForm({ brands, colors }: BulkAddProps) {
  const [addModel, setAddModel] = useState(false)
  const [added, setAdded] = useState(false)
  const [bulk, setBulk] = useState<BulkType>({})
  const [toRender, setToRender] = useState<Omit<Product, 'id'>[]>([])
  const [name, setName] = useState('')
  const [brand, setBrand] = useState(brands[0].name)
  const [color, setColor] = useState(colors[0].name)
  const [model, setModel] = useState('')
  const [price, setPrice] = useState(0)

  const reset = () => {
    setName('')
    setBrand(brands[0].name)
    setModel('')
    setPrice(0)
    setColor(colors[0].name)
    setAddModel(false)
  }

  const handleBulkCreation = async () => {
    console.log(Object.values(bulk))
    const token = localStorage.getItem('token') || ''
    const flag = await handleProductForm({
      product: Object.values(bulk),
      method: 'POST',
      message: 'Bulk creation succesful',
      token
    })
    if (flag) {
      reset()
      setBulk({})
      setToRender([])
    }
  }

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault()
    if (!addModel) {
      setAddModel(true)
    } else if (added) {
      setAdded(false)
      reset()
    } else {
      reset()
    }
  }

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (name in bulk) {
      setBulk(prev => ({
        ...prev,
        [name]: { ...prev[name], data: [...prev[name].data, { price, color }] }
      }))
    } else {
      setBulk(prev => ({
        ...prev,
        [name]: { name, brand, model, data: [{ price, color }] }
      }))

    }

    setToRender(prev => [...prev, {
      name,
      brand,
      model,
      color,
      price
    }])
    setAdded(true)
    setPrice(0)
    setColor('')
  }

  return (
    <div>

      <div>
        {/* Container dos Forms */}
        <div>
          {/* Form 1 */}
          <div>
            <form onSubmit={handleSubmit1}>

              <input
                type="text"
                name="name"
                min={3}
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={addModel}
              />
              <select name="brand" onChange={({ target }) => setBrand(target.value)} value={brand} disabled={addModel}>
                {brands.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>

              <input
                type="text"
                name="model"
                min={3}
                placeholder='Model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
                disabled={addModel}
              />

              <button type='submit'>{addModel ? "ADD NEW MODEL" : 'ADD MODEL'}</button>
            </form>
          </div>
          {/* Form 2 */}
          <div>
            <form onSubmit={handleSubmit2}>
              <select name="color" onChange={({ target }) => setColor(target.value)} value={color} disabled={!addModel}>
                {colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>

              <input
                type="number"
                name="price"
                placeholder='Price'
                min={100}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                disabled={!addModel}
                required
              />

              <button type="submit" disabled={!addModel}>ADD PRODUCT</button>
            </form>

          </div>
        </div>
        {/* Container do button CREATE */}
        <div>
          <button disabled={toRender.length <= 0} onClick={handleBulkCreation}>CREATE</button>
        </div>
      </div>

      {/* Container para a tabela dos produtos */}
      <div>
        {toRender.map((item, ind) => (
          <div key={ind}>
            <span>-{item.name}-</span>
            <span>-{item.brand}-</span>
            <span>-{item.color}-</span>
            <span>{item.price}</span>
            <span>{item.model}</span>
          </div>
        ))}
      </div>


    </div>
  )
}
