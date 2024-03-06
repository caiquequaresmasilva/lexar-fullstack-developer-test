import { BulkAddForm } from "."
import { useGetOptions } from "../../../hooks"

export default function BulkAddFormContainer() {
  const { brand, color, loading } = useGetOptions()
  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <BulkAddForm
          brands={brand}
          colors={color}
        />
      )}
    </div>
  )
  
}
