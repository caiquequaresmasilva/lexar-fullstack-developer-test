import { FilterTool, ProductsContainer, SearchTool } from "./components"

function Home() {

  return (
    <main className="w-full h-screen text-[#FFFFFFD6]">
      <div>
        <div>
          <SearchTool />
          <FilterTool />
        </div>

        <ProductsContainer />
      </div>
    </main>
  )
}

export default Home
