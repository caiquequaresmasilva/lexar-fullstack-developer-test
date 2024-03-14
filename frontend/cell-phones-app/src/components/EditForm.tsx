import { useInputFields } from "../hooks"
import { BrandInput, ColorInput, NameInput, PriceInput } from "."
import { useCreateProductMutation, useUpdateProductMutation } from "../redux/api/productApiSlice"
import { ProductNameRegex } from "../utils"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

type Action = 'UPDATE' | 'CREATE'

interface EditFormProps {
  product?: Product,
  action: Action
  message?: string
  brands: Option[]
  colors: Option[]
}
export default function EditForm({ product, action, brands, colors }: EditFormProps) {
  const [
    { brand, color, model, name, price },
    { setBrand, setColor, setModel, setName, setPrice }
  ] = useInputFields(product)
  const [errorMsg, setErrorMsg] = useState('')
  const [createProduct] = useCreateProductMutation()
  const [updateProduct] = useUpdateProductMutation()
  const navigate = useNavigate()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let payload;
    try {
      if (action == 'CREATE') {
        payload = await createProduct({
          name,
          brand,
          model,
          color,
          price: Number(price)
        }).unwrap()
      } else {
        payload = await updateProduct({
          id: product?.id || '',
          name,
          brand,
          model,
          color,
          price: Number(price)
        }).unwrap()
      }
      const { message } = payload
      message && alert(message)
      setErrorMsg('')
    } catch (e) {
      setErrorMsg((e as ApiError).data.error)
    }
    if (action == 'CREATE') {
      navigate('/home')
    }
  }

  return (

    <form className="flex flex-col w-1/2 h-full justify-between text-white" onSubmit={handleSubmit}>

      <NameInput state={name} setState={setName} regex={ProductNameRegex} />
      <BrandInput brands={brands} state={brand} setState={setBrand} />
      <NameInput state={model} setState={setModel} regex={ProductNameRegex} model />
      <ColorInput colors={colors} state={color} setState={setColor} />
      <PriceInput state={price} setState={setPrice} />

      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>{action}</button>
      <p className="text-red-500 text-sm my-2">{errorMsg}</p>
    </form>

  )
}
