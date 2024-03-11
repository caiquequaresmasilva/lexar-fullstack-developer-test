import { reset } from "../../../redux/filterSlice"
import { useAppDispatch } from "../../../redux/hooks"
import { toggleFilterModal, toggleSearchModal } from "../../../redux/modalSlice"

export default function FiltersBars() {
  const dispatch = useAppDispatch()
  const handleAllButton = () => dispatch(reset())
  const handleSearchButton = () => dispatch(toggleSearchModal())
  const handleFilterButton = () => dispatch(toggleFilterModal())

  return (
    <div className="self-start pb-2">
      <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={handleAllButton}>ALL</button>
      <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={handleSearchButton}>SEARCH</button>
      <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={handleFilterButton}>FILTER</button>
    </div>
  )
}
