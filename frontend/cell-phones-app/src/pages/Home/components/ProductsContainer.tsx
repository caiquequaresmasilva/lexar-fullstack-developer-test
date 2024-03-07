import { useFetch } from "../../../hooks"
import { makeFilterUrl } from "../../../utils"
import { ProductCard } from "."
import { useState } from "react"

export default function ProductsContainer() {
  const [refresh, setRefresh] = useState(false)
  const name = ''
  const brand = ''
  const color = ''
  const minPrice = ''
  const maxPrice = ''

  const { data, loading } = useFetch<Product[]>(makeFilterUrl({ name, brand, color, minPrice, maxPrice }), [], refresh)

  const refreshFunction = () => setRefresh(prev => !prev)

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center'>
      {loading ? <p>Loading...</p> : (
        <>
          {data.map(prod => <ProductCard {...prod} key={prod.id} refresh={refreshFunction} />)}
        </>
      )}

    </div>
  )
}
