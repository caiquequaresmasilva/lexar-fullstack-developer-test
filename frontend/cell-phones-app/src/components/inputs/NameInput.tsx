import { memo } from "react"
type NameInputProps = {
  disable?: boolean
} & TextInputProps<string>
export default memo(function NameInput({ setState, state, disable = false }: NameInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => setState(value)
  return (
    <input
      type="text"
      name="name"
      placeholder="Name"
      minLength={3}
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black mx-1"
      value={state}
      onChange={handleOnChange}
      disabled={disable}
      required
    />
  )
})
