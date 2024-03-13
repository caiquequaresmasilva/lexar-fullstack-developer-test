import { useState } from "react"
import { useInputFields } from "../../../hooks"
import { BrandInput, ColorInput, ModelInput, NameInput, PriceInput } from "../../../components"
import { BulkItemsContainer } from "."
import { useCreateProductMutation } from "../../../redux/api/apiSlice"
import {ProductRegex } from "../../../utils"


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
  const [createProduct] = useCreateProductMutation()

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

  const handleBulkCreation = async () => {
    try {
      const { error } = await createProduct(Object.values(bulk)).unwrap()
      alert(error || 'Bulk creation successful.')
      reset()
      setBulk({})
      setToRender([])
    } catch (err) {
      console.log(err)
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
            <NameInput state={name} setState={setName} disable={addModel} regex={ProductRegex} />
            <ModelInput state={model} setState={setModel} disable={addModel} />
            <BrandInput brands={brands} state={brand} setState={setBrand} disable={addModel} />
            <button className="text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md bg-green-500" type='submit'>{addModel ? "ADD NEW MODEL" : 'ADD MODEL'}</button>
          </form>
          {/* Form 2 */}
          <form className="flex justify-between items-center my-2" onSubmit={handleSubmit2}>
            <ColorInput colors={colors} state={color} setState={setColor} disable={!addModel} />
            <PriceInput state={price} setState={setPrice} disable={!addModel} />

            <button className={` text-green-900 font-bold text-base px-2 py-1 w-fit rounded-md ${addModel ? 'bg-green-500' : 'bg-green-800'}`} type="submit" disabled={!addModel}>ADD PRODUCT</button>
          </form>
        </div>
        <button className={`ml-4 px-2 rounded-3xl text-green-900 font-bold ${toRender.length <= 0 ? 'bg-green-800' : 'bg-green-300'}`} disabled={toRender.length <= 0} onClick={handleBulkCreation}>CREATE</button>
      </div>
      <BulkItemsContainer items={toRender} />

    </div >
  )
}
