import { Link } from "react-router-dom"

interface ProductProps {
  id: string
  name: string
  brand: string
  model: string
  price: number
  color: string

}

export default function ProductCard({ id, name, brand, model, color, price }: ProductProps) {

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <ul>
          <li>Brand: {brand}</li>
          <li>Model: {model}</li>
          <li>Color: {color}</li>
          <li>Price: {price}</li>
        </ul>
      </div>
      <div>
        <Link to={`/home/edit-product/${id}`}>EDIT</Link>
        <button>ADD VARIANT</button>
        <button>DELETE</button>
      </div>
    </div>
  )
}
