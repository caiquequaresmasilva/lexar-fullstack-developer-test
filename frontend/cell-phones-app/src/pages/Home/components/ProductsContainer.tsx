import { useFetch } from "../../../hooks"
import { makeFilterUrl } from "../../../utils"
import { ProductCard } from "."
import { useState } from "react"
import { Loading } from "../../../components"


export default function ProductsContainer({ brand, color, maxPrice, minPrice, name, colors }: FilterParams & { colors: Option[] }) {
    const [refresh, setRefresh] = useState(false)
    const { data, loading } = useFetch<Product[]>(makeFilterUrl({ name, brand, color, minPrice, maxPrice }), [], refresh)
    const refreshFunction = () => setRefresh(prev => !prev)

    return (
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center'>
            {loading ? <Loading /> : (
                <>
                    {data.map(prod => <ProductCard {...prod} key={prod.id} refresh={refreshFunction} colors={colors} />)}
                </>
            )}
        </div>
    )
}
