import { memo } from "react"
import { useGetColorsQuery } from "../../redux/api/productApiSlice"

type ColorInputsProps = {
  disable?: boolean
} & TextInputProps<string>

export default memo(function ColorInput({state, setState, disable = false }: ColorInputsProps) {
  const { data: colors = [],isSuccess} = useGetColorsQuery()
  const handleOnChange = ({ target: { value } }: OnChangeSelectType) => setState(value)
  return (
    <label htmlFor="variant-color-select" className="font-semibold">
      Color:
      <select disabled={disable} id="variant-color-select" name="color" onChange={handleOnChange} value={state} className="text-black m-2 bg-zinc-100 rounded focus:border-green-600 focus:outline-none focus:border-2">
        <option value="">Select a color</option>
        {isSuccess && colors.map(({ id, name }) => (<option key={id}>{name}</option>))}
      </select>
    </label>
  )
})
