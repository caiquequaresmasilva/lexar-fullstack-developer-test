import { DeleteModal, FilterModal, FiltersBars, ProductsContainer, SearchModal, VariantModal } from "./components"
import { Loading } from "../../components"
import { useGetBrandsQuery, useGetColorsQuery } from "../../redux/api/apiSlice"

function Home() {
  const { data: colors = [], isLoading: colorsLoading } = useGetColorsQuery()
  const { data: brands = [], isLoading: brandsLoading } = useGetBrandsQuery()
  return (
    <main className='w-full h-screen px-4 flex justify-center items-center'>
      {colorsLoading && brandsLoading ? <Loading /> : (
        <>
          <div className="flex flex-col w-full h-screen">
            <FiltersBars />
            <ProductsContainer />
          </div>
        </>
      )}
      <SearchModal />
      <FilterModal brands={brands} colors={colors} />
      <VariantModal colors={colors} />
      <DeleteModal />
    </main>
  )
}

export default Home
