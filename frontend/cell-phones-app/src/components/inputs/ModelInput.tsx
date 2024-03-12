import { memo } from "react"
type ModelInputProps = {
  disable?: boolean
} & TextInputProps<string>
export default memo(function ModelInput({ setState, state, disable = false }: ModelInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => setState(value)
  return (
    <input
      type="text"
      name="model"
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black mx-1"
      minLength={3}
      placeholder='Model'
      value={state}
      onChange={handleOnChange}
      disabled={disable}
      required
    />
  )
})
