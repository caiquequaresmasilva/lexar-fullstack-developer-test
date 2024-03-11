import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../redux/hooks"
import { toggleDeleteModal, toggleVariantModal } from "../../../redux/modalSlice"

interface ProductProps {
  id: string
  name: string
  brand: string
  model: string
  price: number
  color: string
}

export default function ProductCard({ id, name, brand, model, color, price }: ProductProps) {
  const dispatch = useAppDispatch()
  const handleVariant = () => dispatch(toggleVariantModal({
    name,
    brand,
    color,
    model,
    price
  }))

  const handleDelete = () => dispatch(toggleDeleteModal(id))

  return (
    <div className='shadow-md shadow-black bg-green-200 rounded-lg py-4'>
      <h1 className="font-extrabold text-xl">{name}</h1>
      <div className="flex flex-col items-start pl-4 text-lg">
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <p>Color: {color}</p>
        <p>Price: {price}</p>
      </div>
      <div className="flex justify-evenly">
        <Link to={`/home/edit-product/${id}`} className="text-green-900 m-1 font-bold hover:text-green-500">EDIT</Link>
        <button className="text-green-900 m-1 font-bold hover:text-green-500" onClick={handleVariant}>ADD VARIANT</button>
        <button className="text-red-900 m-1 font-bold hover:text-red-500" onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}
