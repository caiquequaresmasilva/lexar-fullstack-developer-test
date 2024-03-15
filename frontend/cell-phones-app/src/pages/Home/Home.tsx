import {
  DeleteModal,
  FilterModal,
  FiltersBars,
  ProductsContainer,
  SearchModal,
  VariantModal
} from "./components"


function Home() {

  return (
    <main className='w-full h-screen px-4 flex justify-center items-center'>
      <div className="flex flex-col w-full h-screen">
        <FiltersBars />
        <ProductsContainer />
      </div>
      <SearchModal />
      <FilterModal />
      <VariantModal />
      <DeleteModal />
    </main>
  )
}

export default Home
