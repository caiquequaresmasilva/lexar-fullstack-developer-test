import { useFetch } from "../../../hooks"
import { makeFilterUrl } from "../../../utils"
import { ProductCard } from "."

export default function ProductsContainer() {
  const name = ''
  const brand = ''
  const color = ''
  const minPrice = ''
  const maxPrice = ''

  const { data, loading } = useFetch<Product[]>(makeFilterUrl({ name, brand, color, minPrice, maxPrice }), [])

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <>
          {data.map(prod => <ProductCard {...prod} key={prod.id} />)}
        </>
      )}

    </div>
  )
}
