import { useParams } from "react-router-dom";
import { EditForm } from "../../../components";
import { useFetch, useGetOptions } from "../../../hooks";

export default function EditFormContainer() {
  const { id } = useParams()
  const { data: product, loading: prodLoading } = useFetch<Product>(
    `product/${id}`,
    { id: '', name: '', model: '', price: 100, color: '', brand: '' })
  const { brand, color, loading: optionLoading } = useGetOptions()
  return (
    <div>
      {prodLoading && optionLoading ? <p>Loading...</p> : (
        <EditForm
          action="UPDATE"
          product={{ ...product, id: id as string }}
          message="Product updated"
          brands={brand}
          colors={color}
        />)}
    </div>
  )
}
