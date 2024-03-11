import { memo } from "react"

export default memo(function PriceInput({ state, setState }: TextInputProps<number>) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (!isNaN(+value)) {
      setState(+value)
    }
  }
  return (
    <label htmlFor="variant-price-input" className="font-semibold">
      Price:
      <input
        type="text"
        id="variant-price-input"
        name="price"
        pattern="[0-9]*"
        className="text-black w-[30%] m-2"
        value={state}
        onChange={handleOnChange}
        required
      />
    </label>
  )
})
