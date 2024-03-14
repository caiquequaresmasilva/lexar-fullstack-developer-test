import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { selectOpenVariant, toggleVariantModal } from "../../../../redux/modalSlice"
import { ColorInput, PriceInput } from "../../../../components"
import { useCreateProductMutation } from "../../../../redux/api/productApiSlice"

interface VariantProps {
  colors: Option[]
}
export default function VariantModal({ colors }: VariantProps) {
  const { openVariant, variantData } = useAppSelector(selectOpenVariant)
  const [errorMsg, setErrorMsg] = useState('')
  const dispatch = useAppDispatch()
  const { name, brand, model } = variantData
  const [createProduct] = useCreateProductMutation()


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
    try {
      const { message } = await createProduct({
        name,
        model,
        color: vcolor,
        brand,
        price: Number(vprice)
      }).unwrap()
      message && alert(message)
      setErrorMsg('')
    } catch (e) {
      setErrorMsg((e as ApiError).data.error)
    }
    reset()
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
          <p className="text-red-500 text-sm my-2">{errorMsg}</p>
        </form>
        <button onClick={handleCancel} className="text-red-900 font-bold hover:text-red-500">CANCEL</button>
        
      </div>
    </div>
  )
}
