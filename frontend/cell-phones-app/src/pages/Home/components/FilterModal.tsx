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
      <div className="bg-green-100 w-[35%] h-[40%] rounded-xl p-4 flex flex-col justify-between cursor-default">
        <form className="flex flex-col justify-between items-center h-[80%] " onSubmit={handleForm}>

          <div className="flex text-black w-full justify-evenly font-semibold">
            <label htmlFor="filter-brand-select">
              Brands:
              <select className="m-1" id='filter-brand-select' name="brand" onChange={({ target }) => setBrand(target.value)}>
                <option value="">Select a brand</option>
                {brands?.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>
            </label>


            <label htmlFor="filter-color-select">
              Colors:
              <select className="m-1" id="filter-color-select" name="color" onChange={({ target }) => setColor(target.value)}>
                <option value="">Select a color</option>
                {colors?.map(({ id, name }) => (<option key={id}>{name}</option>))}
              </select>
            </label>
          </div>

          <div className="flex text-black w-full justify-center font-semibold">
            <label htmlFor="filter-minprice-input" className="mx-4">
              Min price:
              <input
                type="number"
                className="w-[40%]"
                id="filter-minprice-input"
                name="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                required
              />
            </label>


            <label htmlFor="filter-maxprice-input">
              Max price:
              <input
                type="number"
                className="w-[40%]"
                id="filter-maxprice-input"
                name="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                required
              />
            </label>
          </div>




          <button className="text-green-900 font-bold hover:text-green-500" type="submit">FILTER</button>
        </form>
        <button className="text-black font-bold" onClick={closeModal}>CLOSE</button>

      </div>

    </div>
  )
}
