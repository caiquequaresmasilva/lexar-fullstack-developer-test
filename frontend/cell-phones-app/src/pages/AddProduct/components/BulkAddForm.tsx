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
    setColor(colors[0].name)
  }

  return (
    <div className="w-full h-full flex flex-col items-center">

      <div className="flex">
        {/* Container dos Forms */}
        <div className="flex flex-col ">
          {/* Form 1 */}

          <form className="flex justify-between items-center" onSubmit={handleSubmit1}>

            <input
              type="text"
              name="name"
              className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-1 rounded w-[30%]"
              min={3}
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={addModel}
            />

            <input
              type="text"
              name="model"
              className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-1 rounded w-[30%]"
              min={3}
              placeholder='Model'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              disabled={addModel}
            />

            <label htmlFor="bulk-brand-select" className="text-zinc-100">
              Brand:
              <select className="text-black ml-4 rounded" id="bulk-brand-select" name="brand" onChange={({ target }) => setBrand(target.value)} value={brand} disabled={addModel}>
                {brands.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>
            </label>
            <button className="text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md bg-green-500" type='submit'>{addModel ? "ADD NEW MODEL" : 'ADD MODEL'}</button>
          </form>

          {/* Form 2 */}

          <form className="flex justify-between items-center my-2" onSubmit={handleSubmit2}>
            <label htmlFor="bulk-color-select" className="text-zinc-100">
              Color:
              <select className="text-black rounded ml-2" id="bulk-color-select" name="color" onChange={({ target }) => setColor(target.value)} value={color} disabled={!addModel}>
                {colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>
            </label>

            <label htmlFor="bulk-price-input" className="text-zinc-100">
              Price:
              <input
                type="number"
                id="bulk-price-input"
                className="text-black rounded w-[40%] ml-4"
                name="price"
                placeholder='Price'
                min={100}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                disabled={!addModel}
                required
              />
            </label>


            <button className={` text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md ${addModel ? 'bg-green-500' : 'bg-green-800'}`} type="submit" disabled={!addModel}>ADD PRODUCT</button>
          </form>


        </div>
        {/* Container do button CREATE */}

        <button className={`ml-4 px-2 rounded-3xl text-green-900 font-bold ${toRender.length <= 0 ? 'bg-green-800' : 'bg-green-300'}`} disabled={toRender.length <= 0} onClick={handleBulkCreation}>CREATE</button>

      </div>

      {/* Container para a tabela dos produtos */}
      <table className="w-[70%] mt-2 bg-zinc-400 text-center rounded text-green-900">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="bg-zinc-300 text-zinc-900">
          {toRender.map((item, ind) => (
            <tr key={ind}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div >
  )
}
