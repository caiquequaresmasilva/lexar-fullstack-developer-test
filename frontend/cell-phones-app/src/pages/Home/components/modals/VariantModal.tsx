import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { selectOpenVariant, toggleVariantModal } from "../../../../redux/modalSlice"
import { handleProductForm } from "../../../../utils"
import { ColorInput, PriceInput } from "../../../../components"

interface VariantProps {
  colors: Option[]
}
export default function VariantModal({ colors }: VariantProps) {
  const { openVariant, variantData } = useAppSelector(selectOpenVariant)
  const dispatch = useAppDispatch()
  const { name, brand, model } = variantData


  const [vcolor, setVcolor] = useState("")
  const [vprice, setVprice] = useState("")

  const handleCancel = () => {
    dispatch(toggleVariantModal())
    reset()
  }
  const reset = () => {
    setVcolor('')
    setVprice('')
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = localStorage.getItem('token') || ''
    const flag = await handleProductForm({
      product: {
        name,
        details: {
          brand,
          model,
          color: vcolor
        },
        price: Number(vprice)
      },
      message: 'Product variant created',
      token
    })
    flag && reset()
  }
  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${openVariant ? "visible bg-black/90" : "invisible"}`}>
      <div
        className="bg-green-300 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default"
      >
        <div className="flex flex-col justify-between h-1/2 text-lg">
          <h1 className="text-xl font-bold self-center">Create a variant model</h1>
          <h2>{name}</h2>
          <p>Brand: {brand}</p>
          <p>Model: {model}</p>
        </div>
        <form className="flex flex-col justify-center" onSubmit={handleForm}>

          <ColorInput colors={colors} state={vcolor} setState={setVcolor} />

          <PriceInput state={vprice} setState={setVprice} />

          <button className="text-green-900 font-bold hover:text-green-500" type="submit">CREATE</button>
        </form>
        <button onClick={handleCancel} className="text-red-900 font-bold hover:text-red-500">CANCEL</button>

      </div>
    </div>
  )
}
