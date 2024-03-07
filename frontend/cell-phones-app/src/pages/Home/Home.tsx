import { useState } from "react"
import { FilterModal, ProductsContainer, SearchModal } from "./components"
import { useGetOptions } from "../../hooks"
import { Loading } from "../../components"

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
    <main className='w-full h-screen px-4 flex justify-center items-center'>
      {loading ? <Loading /> : (
        <>
          <div className="flex flex-col w-full h-screen">
            <div className="self-start pb-2">
              <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={() => setFilter(INITIAL_PARAMS)}>ALL</button>
              <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={handleSearchButton}>SEARCH</button>
              <button className="text-zinc-100 hover:text-green-500 mr-4" onClick={handleFilterButton}>FILTER</button>
            </div>

            <ProductsContainer {...filter} colors={color} />
          </div>
          <SearchModal updateParams={updateParams} open={openSearch} closeModal={closeSearch} />
          <FilterModal updateParams={updateParams} open={openFilters} closeModal={closeFilter} brands={brand} colors={color} />

        </>
      )}
    </main>
  )
}

export default Home
