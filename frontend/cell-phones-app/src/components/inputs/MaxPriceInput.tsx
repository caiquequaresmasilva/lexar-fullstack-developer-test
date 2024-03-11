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
        className="bg-zinc-100 w-[30%] text-black ml-2 focus:border-green-600 focus:outline-none focus:border-2 rounded"
        id="filter-maxprice-input"
        name="maxPrice"
        pattern="[0-9]*"
        value={state}
        onChange={handleOnChange}
      />
    </label>
  )
})
