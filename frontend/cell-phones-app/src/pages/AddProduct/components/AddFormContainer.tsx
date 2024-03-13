import { EditForm, Loading } from "../../../components";
import { useGetBrandsQuery, useGetColorsQuery } from "../../../redux/api/productApiSlice";

export default function AddFormContainer() {
  const { data: colors = [], isLoading: colorsLoading } = useGetColorsQuery()
  const { data: brands = [], isLoading: brandsLoading } = useGetBrandsQuery()
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
      {colorsLoading && brandsLoading ? <Loading /> : (
        <EditForm
          action="CREATE"
          message="Product created"
          brands={brands}
          colors={colors}
        />
      )}

    </div>
  )
}
