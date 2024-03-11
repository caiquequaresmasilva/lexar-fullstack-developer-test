import { memo } from "react"

type BrandProps = {
  brands: Option[]
} & TextInputProps<string>

export default memo(function BrandInput({ brands, state, setState }: BrandProps) {
  const handleOnChange = ({ target: { value } }: OnChangeSelectType) => setState(value)
  return (
    <label htmlFor="filter-brand-select" className="font-semibold">
      Brands:
      <select className="m-1 text-black bg-zinc-100 rounded focus:border-green-600 focus:outline-none focus:border-2" id='filter-brand-select' name="brand" onChange={handleOnChange} value={state}>
        <option value="">Select a brand</option>
        {brands?.map(({ id, name }) => (<option key={id}>{name}</option>))}
      </select>
    </label>
  )
})
