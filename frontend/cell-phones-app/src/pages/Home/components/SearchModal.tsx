import { useState } from "react"

export default function SearchModal({ updateParams, open, closeModal }: FiltersModalParams) {
  const [search, SetSearch] = useState('')
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    updateParams({ name: search })
    SetSearch('')
    closeModal()
  }
  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${open ? "visible bg-black/90" : "invisible"}`}>
      <div className="bg-green-100 w-3/4 h-[15%] sm:w-1/4 rounded-xl p-4 flex flex-col justify-between cursor-default items-center">
        <form onSubmit={handleForm}>
          <input
            type="text"
            name="search"
            className="bg-zinc-200 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
            placeholder="Search..."
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
            required
          />
          <button className="text-green-900 font-bold hover:text-green-500 ml-2 bg-green-500 hover:bg-green-400 p-1 rounded" type="submit">SEARCH</button>
        </form>
        <button className="text-black font-bold mt-2" onClick={closeModal}>CLOSE</button>

      </div>

    </div>
  )
}
