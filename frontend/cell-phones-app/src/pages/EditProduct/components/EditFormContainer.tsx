import { useParams } from "react-router-dom";
import { EditForm } from "../../../components";
import { useFetch } from "../../../hooks";

export default function EditFormContainer() {
  const { id } = useParams()
  const { data, loading } = useFetch<Product>(
    `product/${id}`,
    { id: '', name: '', model: '', price: 100, color: '', brand: '' })
  return (
    <div>
      {loading ? <p>Loading...</p> : <EditForm action="UPDATE" product={{ ...data, id: id as string }} />}
    </div>
  )
}
