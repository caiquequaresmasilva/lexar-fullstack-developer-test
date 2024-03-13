import { BulkAddForm } from "."
import { Loading } from "../../../components"
import { useGetBrandsQuery, useGetColorsQuery } from "../../../redux/api/apiSlice"

export default function BulkAddFormContainer() {
  const { data: colors = [], isLoading: colorsLoading } = useGetColorsQuery()
  const { data: brands = [], isLoading: brandsLoading } = useGetBrandsQuery()
  return (
    <div className="flex flex-col items-center  w-full h-full text-xl">
      {colorsLoading && brandsLoading ? <Loading /> : (
        <BulkAddForm
          brands={brands}
          colors={colors}
        />
      )}
    </div>
  )

}
