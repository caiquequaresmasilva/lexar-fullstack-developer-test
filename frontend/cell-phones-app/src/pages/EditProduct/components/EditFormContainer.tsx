import { useParams } from "react-router-dom";
import { EditForm, Loading } from "../../../components";
import { useGetBrandsQuery, useGetColorsQuery, useGetProductQuery } from "../../../redux/api/productApiSlice";

export default function EditFormContainer() {
  const { id } = useParams()
  const { data: product, isLoading } = useGetProductQuery(id as string)
  const { data: colors = [], isLoading: colorsLoading } = useGetColorsQuery()
  const { data: brands = [], isLoading: brandsLoading } = useGetBrandsQuery()
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
      {colorsLoading || brandsLoading || isLoading ? <Loading /> : (
        <EditForm
          action="UPDATE"
          product={{ ...(product as Product), id: id as string }}
          message="Product updated"
          brands={brands}
          colors={colors}
        />)}
    </div>
  )
}
