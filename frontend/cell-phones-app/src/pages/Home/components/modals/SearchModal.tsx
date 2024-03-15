import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { selectOpenSearch, toggleSearchModal } from "../../../../redux/modalSlice"
import { setFilters } from "../../../../redux/filterSlice"

export default function SearchModal() {
  const dispatch = useAppDispatch()
  const open = useAppSelector(selectOpenSearch)
  const [search, setSearch] = useState('')

  const handleClose = () => dispatch(toggleSearchModal())
  const handleOnChange = ({ target: { value } }: OnChangeType) => setSearch(value)
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setFilters({ name: search }))
    setSearch('')
    dispatch(toggleSearchModal())
  }
  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${open ? "visible bg-black/90" : "invisible"}`}>
      <div className="bg-green-300 w-3/4 h-[15%] sm:w-1/4 rounded-xl p-4 flex flex-col justify-between cursor-default items-center">
        <form onSubmit={handleForm}>
          <input
            type="text"
            name="search"
            className="bg-zinc-200 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
            placeholder="Search..."
            value={search}
            onChange={handleOnChange}
            required
          />
          <button className="text-green-900 font-bold hover:text-green-500 ml-2 bg-green-500 hover:bg-green-400 p-1 rounded" type="submit">SEARCH</button>
        </form>
        <button className="text-black font-bold mt-2" onClick={handleClose}>CLOSE</button>

      </div>

    </div>
  )
}
