import { EditForm } from "../../../components";
import { useGetOptions } from "../../../hooks";

export default function AddFormContainer() {
  const { brand, color, loading } = useGetOptions()
  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <EditForm
          action="CREATE"
          message="Product created"
          brands={brand}
          colors={color}
        />
      )}

    </div>
  )
}
