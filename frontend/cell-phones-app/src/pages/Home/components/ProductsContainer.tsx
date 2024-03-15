import { ProductCard } from "."
import { Loading } from "../../../components"
import { useGetFilterQuery } from "../../../redux/api/productApiSlice"
import { selectFilters } from "../../../redux/filterSlice"
import { useAppSelector } from "../../../redux/hooks"


export default function ProductsContainer() {
  const { brand, color, maxPrice, minPrice, name } = useAppSelector(selectFilters)
  const { data: products, isLoading, isSuccess, isError, error } = useGetFilterQuery({ brand, color, maxPrice, minPrice, name })

  const renderHome = () => {
    if (isLoading) {
      return <Loading />
    } else if (isSuccess) {
      return products.map(prod => <ProductCard {...prod} key={prod.id} />)
    } else if (isError) {
      alert(error.toString())
      return <></>
    }
  }

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center'>
      {renderHome()}
    </div>
  )
}
