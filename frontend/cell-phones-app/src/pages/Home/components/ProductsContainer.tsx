import { useFetch } from "../../../hooks"
import { makeFilterUrl } from "../../../utils"
import { ProductCard } from "."
import { useState } from "react"
import { Loading } from "../../../components"
import { useAppSelector } from "../../../redux/hooks"
import { selectFilters } from "../../../redux/filterSlice"

interface ProductsContainerProps {
  colors: Option[]
}
export default function ProductsContainer({ colors }: ProductsContainerProps) {
  const { brand, color, maxPrice, minPrice, name } = useAppSelector(selectFilters)
  const { data, loading } = useFetch<Product[]>(makeFilterUrl({ name, brand, color, minPrice, maxPrice }), [])

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center'>
      {loading ? <Loading /> : (
        <>
          {data.map(prod => <ProductCard {...prod} key={prod.id} colors={colors} />)}
        </>
      )}
    </div>
  )
}
