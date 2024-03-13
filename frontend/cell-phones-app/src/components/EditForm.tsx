import { useInputFields } from "../hooks"
import { BrandInput, ColorInput, ModelInput, NameInput, PriceInput } from "."
import { useCreateProductMutation, useUpdateProductMutation } from "../redux/api/productApiSlice"
import { ProductRegex } from "../utils"

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
  const [createProduct] = useCreateProductMutation()
  const [updateProduct] = useUpdateProductMutation()

  const reset = () => {
    setBrand('')
    setColor('')
    setModel('')
    setName('')
    setPrice('')
  }

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
      const { error, message } = payload
      alert(error || message)
    } catch (err) {
      console.log(err)
    }
    if (action == 'CREATE') {
      reset()
    }
  }

  return (

    <form className="flex flex-col w-1/2 h-full justify-between text-white" onSubmit={handleSubmit}>

      <NameInput state={name} setState={setName} regex={ProductRegex} />
      <BrandInput brands={brands} state={brand} setState={setBrand} />
      <ModelInput state={model} setState={setModel} />
      <ColorInput colors={colors} state={color} setState={setColor} />
      <PriceInput state={price} setState={setPrice} />

      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>{action}</button>
    </form>

  )
}
