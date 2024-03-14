import { memo } from "react"
import { useGetBrandsQuery } from "../../redux/api/productApiSlice"

type BrandProps = {
  disable?: boolean
} & TextInputProps<string>

export default memo(function BrandInput({ state, setState, disable = false }: BrandProps) {
  const { data: brands = [], isSuccess } = useGetBrandsQuery()
  const handleOnChange = ({ target: { value } }: OnChangeSelectType) => setState(value)
  return (
    <label htmlFor="filter-brand-select" className="font-semibold">
      Brands:
      <select className="m-1 text-black bg-zinc-100 rounded focus:border-green-600 focus:outline-none focus:border-2" id='filter-brand-select' name="brand" onChange={handleOnChange} value={state} disabled={disable}>
        <option value="">Select a brand</option>
        {isSuccess && brands?.map(({ id, name }) => (<option key={id}>{name}</option>))}
      </select>
    </label>
  )
})
