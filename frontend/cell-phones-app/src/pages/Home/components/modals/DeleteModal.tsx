import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../../redux/hooks"
import { selectOpenDelete, toggleDeleteModal } from "../../../../redux/modalSlice"
import { useDeleteProductMutation } from "../../../../redux/api/apiSlice"

export default function DeleteModal() {
  const { deleteId, openDelete } = useAppSelector(selectOpenDelete)
  const dispatch = useDispatch()
  const [deleteProduct] = useDeleteProductMutation()

  const handleCancel = () => dispatch(toggleDeleteModal())

  const handleDelete = async () => {
    try {
      const { error, message } = await deleteProduct(deleteId).unwrap()
      alert(message || error)
    } catch (err) {
      console.log(err)
    }
    handleCancel()
  }


  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${openDelete ? "visible bg-black/90" : "invisible"}`}>
      <div
        className="bg-green-300 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default items-center"
      >
        <h1 className="text-xl font-bold">Deleting product</h1>

        <p className="text-lg">Are you sure you want to delete this product? This action cannot be undone.</p>

        <button onClick={handleCancel} className="text-green-900 font-bold hover:text-green-500">CANCEL</button>
        <button onClick={handleDelete} className="text-red-900 font-bold hover:text-red-500">DELETE</button>

      </div>
    </div>
  )
}
