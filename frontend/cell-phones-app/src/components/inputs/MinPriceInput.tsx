import { memo } from "react"

export default memo(function MinPriceInput({ state, setState }: TextInputProps<number>) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (!isNaN(+value)) {
      setState(+value)
    }
  }
  return (
    <label htmlFor="filter-minprice-input" className="mx-4">
      Minimum price:
      <input
        type="text"
        className="w-[30%] ml-1"
        id="filter-minprice-input"
        name="minPrice"
        pattern="[0-9]*"
        value={state}
        onChange={handleOnChange}
        required
      />
    </label>
  )
})
