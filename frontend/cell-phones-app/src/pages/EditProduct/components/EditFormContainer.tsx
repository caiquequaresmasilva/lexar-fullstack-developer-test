import { useParams } from "react-router-dom";
import { EditForm, Loading } from "../../../components";
import { useGetOptions } from "../../../hooks";
import { useGetProductQuery } from "../../../redux/api/apiSlice";

export default function EditFormContainer() {
  const { id } = useParams()
  //   const { data: product, loading: prodLoading } = useFetch<Product>(
  //     `product/${id}`,
  //     { id: '', name: '', model: '', price: 100, color: '', brand: '' })
  const { data: product, isLoading } = useGetProductQuery(id as string)
  const { brand, color, loading: optionLoading } = useGetOptions()
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
      {isLoading && optionLoading ? <Loading /> : (
        <EditForm
          action="UPDATE"
          product={{ ...(product as Product), id: id as string }}
          message="Product updated"
          brands={brand}
          colors={color}
        />)}
    </div>
  )
}
