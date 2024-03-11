import { useNavigate } from "react-router-dom"
import { handleProductForm } from "../utils"
import { useInputFields } from "../hooks"
import { BrandInput, ColorInput, ModelInput, NameInput, PriceInput } from "."

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
  const [
    { brand, color, model, name, price },
    { setBrand, setColor, setModel, setName, setPrice }
  ] = useInputFields(product)

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
        price: Number(price)
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

      <NameInput state={name} setState={setName} />
      <BrandInput brands={brands} state={brand} setState={setBrand} />
      <ModelInput state={model} setState={setModel} />
      <ColorInput colors={colors} state={color} setState={setColor} />
      <PriceInput state={price} setState={setPrice} />
      
      <button className='text-white bg-green-700 rounded py-1 hover:bg-green-600' type='submit'>{action}</button>
    </form>

  )
}
