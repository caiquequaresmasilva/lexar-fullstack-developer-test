import { memo } from "react"

export default memo(function MinPriceInput({ state, setState }: TextInputProps<string>) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (!isNaN(+value)) {
      setState(value)
    }
  }
  return (
    <label htmlFor="filter-minprice-input" className="mx-4">
      Minimum price:
      <input
        type="text"
        className="bg-zinc-100 w-[30%] text-black ml-2 focus:border-green-600 focus:outline-none focus:border-2 rounded"
        id="filter-minprice-input"
        name="minPrice"
        pattern="[0-9]*"
        value={state}
        onChange={handleOnChange}
      />
    </label>
  )
})
