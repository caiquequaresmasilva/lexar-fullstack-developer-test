import { useState } from "react"
import { useInputFields } from "../../../hooks"
import { BrandInput, ColorInput, ModelInput, NameInput, PriceInput } from "../../../components"
import { BulkItemsContainer } from "."
import { useCreateProductMutation } from "../../../redux/api/productApiSlice"
import { ProductNameRegex } from "../../../utils"
import { nanoid } from "@reduxjs/toolkit"



type BulkType = {
  [index: string]: ProductType3
}

export default function BulkAddForm() {
  const [addModel, setAddModel] = useState(false)
  const [added, setAdded] = useState(false)
  const [bulk, setBulk] = useState<BulkType>({})
  const [toRender, setToRender] = useState<Product[]>([])
  const [createProduct] = useCreateProductMutation()
  const [errorMsg, setErrorMsg] = useState('')

  const [
    { brand, color, model, name, price },
    { setBrand, setColor, setModel, setName, setPrice }
  ] = useInputFields()

  const reset = () => {
    setName('')
    setBrand('')
    setModel('')
    setPrice('')
    setColor('')
    setAddModel(false)
  }
  const handleDelete = (id: string, name: string, price: number, color: string) => {
    setToRender(prev => prev.filter(({ id: prodId }) => prodId !== id))
    setBulk(prev => ({
      ...prev,
      [name]: { ...prev[name], data: prev[name].data.filter(({ price: p, color: c }) => p !== price && c !== color) }
    }))
  }


  const handleBulkCreation = async () => {
    try {
      const { message } = await createProduct(Object.values(bulk)).unwrap()
      reset()
      setBulk({})
      setToRender([])
      message && alert(message)
      setErrorMsg('')
    } catch (e) {
      setErrorMsg((e as ApiError).data.error)
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
        [name]: { ...prev[name], data: [...prev[name].data, { price: Number(price), color }] }
      }))
    } else {
      setBulk(prev => ({
        ...prev,
        [name]: { name, brand, model, data: [{ price: Number(price), color }] }
      }))

    }

    setToRender(prev => [...prev, {
      id: nanoid(),
      name,
      brand,
      model,
      color,
      price: Number(price)
    }])
    setAdded(true)
    setPrice('')
    setColor('')
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex bg-green-900 w-[80%] p-2 rounded-lg justify-evenly">
        {/* Forms containers */}
        <div className="flex flex-col">
          {/* Form 1 */}
          <form className="flex justify-between items-center" onSubmit={handleSubmit1}>
            <NameInput state={name} setState={setName} disable={addModel} regex={ProductNameRegex} />
            <ModelInput state={model} setState={setModel} disable={addModel} />
            <BrandInput state={brand} setState={setBrand} disable={addModel} />
            <button className="text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md bg-green-500" type='submit'>{addModel ? "ADD NEW MODEL" : 'ADD MODEL'}</button>
          </form>
          {/* Form 2 */}
          <form className="flex justify-between items-center my-2" onSubmit={handleSubmit2}>
            <ColorInput state={color} setState={setColor} disable={!addModel} />
            <PriceInput state={price} setState={setPrice} disable={!addModel} />

            <button className={` text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md ${addModel ? 'bg-green-500' : 'bg-green-800'}`} type="submit" disabled={!addModel}>ADD PRODUCT</button>
          </form>
        </div>
        <button className={`ml-4 px-2 rounded-3xl text-green-900 font-bold ${toRender.length <= 0 ? 'bg-green-800' : 'bg-green-300'}`} disabled={toRender.length <= 0} onClick={handleBulkCreation}>CREATE</button>
      </div>
      <p className="text-red-500 text-sm my-2">{errorMsg}</p>
      <BulkItemsContainer items={toRender} handleDelete={handleDelete} />

    </div >
  )
}
