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
      <div className="bg-slate-950 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default text-black">
        <form onSubmit={handleForm}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
            required
          />
          <button className="text-green-500" type="submit">SEARCH</button>
        </form>
        <button className="text-white" onClick={closeModal}>CLOSE</button>

      </div>

    </div>
  )
}
