import { useParams } from "react-router-dom";
import { EditForm, Loading } from "../../../components";
import { useGetProductQuery } from "../../../redux/api/productApiSlice";

export default function EditFormContainer() {
  const { id } = useParams()
  const { data: product, isLoading } = useGetProductQuery(id as string)
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
      {isLoading ? <Loading /> : (
        <EditForm
          action="UPDATE"
          product={{ ...(product as Product), id: id as string }}
          message="Product updated"
        />)}
    </div>
  )
}
