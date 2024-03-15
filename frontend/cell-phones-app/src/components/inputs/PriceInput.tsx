import { memo } from "react"
type PriceInputProps = {
  disable?: boolean
} & TextInputProps<string>
export default memo(function PriceInput({ state, setState, disable = false }: PriceInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (!isNaN(+value)) {
      setState(value)
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
        className="bg-zinc-100 w-[30%] text-black ml-2 focus:border-green-600 focus:outline-none focus:border-2 rounded"
        value={state}
        onChange={handleOnChange}
        disabled={disable}
        required
      />
    </label>
  )
})
