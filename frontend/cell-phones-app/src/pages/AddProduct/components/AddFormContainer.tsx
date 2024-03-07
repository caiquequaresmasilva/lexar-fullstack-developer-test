import { EditForm } from "../../../components";
import { useGetOptions } from "../../../hooks";

export default function AddFormContainer() {
  const { brand, color, loading } = useGetOptions()
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
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
