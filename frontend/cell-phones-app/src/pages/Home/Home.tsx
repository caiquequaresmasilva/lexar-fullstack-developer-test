import { useState } from "react"
import { FilterModal, ProductsContainer, SearchModal } from "./components"
import { useGetOptions } from "../../hooks"

const INITIAL_PARAMS: FilterParams = {
  brand: '',
  color: '',
  name: '',
  minPrice: 0,
  maxPrice: 0

}
function Home() {
  const [filter, setFilter] = useState<FilterParams>(INITIAL_PARAMS)
  const [openSearch, setOpenSearch] = useState(false)
  const [openFilters, setOpenFilters] = useState(false)

  const { color, brand, loading } = useGetOptions()

  const updateParams = (params: Partial<FilterParams>) => {
    setFilter(prev => ({ ...prev, ...params }))
  }
  const handleSearchButton = () => setOpenSearch(true)
  const handleFilterButton = () => setOpenFilters(true)
  const closeSearch = () => setOpenSearch(false)
  const closeFilter = () => setOpenFilters(false)

  return (
    <main className="w-full h-screen text-[#FFFFFFD6]">
      <div>
        <div>
          <button className="text-green-500 m-4" onClick={() => setFilter(INITIAL_PARAMS)}>ALL</button>
          <button className="text-green-500 m-4" onClick={handleSearchButton}>SEARCH</button>
          <button className="text-green-500 m-4" onClick={handleFilterButton}>FILTER</button>
        </div>

        {!loading && <ProductsContainer {...filter} colors={color} />}
      </div>
      {!loading && (
        <>
          <SearchModal updateParams={updateParams} open={openSearch} closeModal={closeSearch} />
          <FilterModal updateParams={updateParams} open={openFilters} closeModal={closeFilter} brands={brand} colors={color} />
        </>
      )}

    </main>
  )
}

export default Home
