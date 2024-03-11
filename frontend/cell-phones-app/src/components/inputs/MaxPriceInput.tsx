import { memo } from "react"

export default memo(function MaxPriceInput({ state, setState }: TextInputProps<string>) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (!isNaN(+value)) {
      setState(value)
    }
  }
  return (
    <label htmlFor="filter-maxprice-input" className="mx-4">
      Maximum price:
      <input
        type="text"
        className="w-[30%] ml-1"
        id="filter-maxprice-input"
        name="maxPrice"
        pattern="[0-9]*"
        value={state}
        onChange={handleOnChange}
        required
      />
    </label>
  )
})
