import { DeleteModal, FilterModal, FiltersBars, ProductsContainer, SearchModal, VariantModal } from "./components"
import { useGetOptions } from "../../hooks"
import { Loading } from "../../components"

function Home() {
  const { color, brand, loading } = useGetOptions()
  return (
    <main className='w-full h-screen px-4 flex justify-center items-center'>
      {loading ? <Loading /> : (
        <>
          <div className="flex flex-col w-full h-screen">
            <FiltersBars />
            <ProductsContainer colors={color} />
          </div>
        </>
      )}
      <SearchModal />
      <FilterModal brands={brand} colors={color} />
      <VariantModal colors={color} />
      <DeleteModal/>
    </main>
  )
}

export default Home
