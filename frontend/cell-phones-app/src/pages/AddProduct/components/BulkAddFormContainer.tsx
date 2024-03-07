import { BulkAddForm } from "."
import { useGetOptions } from "../../../hooks"

export default function BulkAddFormContainer() {
  const { brand, color, loading } = useGetOptions()
  return (
    <div className="flex flex-col items-center  w-full h-full text-xl">
      {loading ? <p>Loading...</p> : (
        <BulkAddForm
          brands={brand}
          colors={color}
        />
      )}
    </div>
  )

}
