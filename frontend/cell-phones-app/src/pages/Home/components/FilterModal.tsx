import { useState } from "react"

export default function FilterModal({ updateParams, open, closeModal, brands = [], colors = [] }: FiltersModalParams) {
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    updateParams({ brand, color, minPrice, maxPrice })
    closeModal()
  }
  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${open ? "visible bg-black/90" : "invisible"}`}>
      <div className="bg-slate-950 w-3/4 h-[45%] sm:w-1/4 md:h-1/2 rounded-xl p-4 flex flex-col justify-between min-w-[350px] cursor-default text-black">
        <form onSubmit={handleForm}>
          <label htmlFor="filter-brand-select" className="text-white">Brands: </label>
          <select id='filter-brand-select' name="brand" onChange={({ target }) => setBrand(target.value)}>
            <option value="">Select a brand</option>
            {brands?.map(({ id, name }) => (<option key={id}>{name}</option>))}
          </select>

          <label htmlFor="filter-color-select" className="text-white">Colors: </label>
          <select id="filter-color-select" name="color" onChange={({ target }) => setColor(target.value)}>
            <option value="">Select a color</option>
            {colors?.map(({ id, name }) => (<option key={id}>{name}</option>))}
          </select>

          <label htmlFor="filter-minprice-input" className="text-white">Minimum price: </label>
          <input
            type="number"
            id="filter-minprice-input"
            name="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            required
          />

          <label htmlFor="filter-maxprice-input" className="text-white">Maximum price: </label>
          <input
            type="number"
            id="filter-maxprice-input"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            required
          />

          <button className="text-green-500" type="submit">SEARCH</button>
        </form>
        <button className="text-white" onClick={closeModal}>CLOSE</button>

      </div>

    </div>
  )
}
