import { memo } from "react"
import { ProductRegex, UserRegex } from "../../utils"
type NameInputProps = {
  disable?: boolean
  regex: typeof UserRegex | typeof ProductRegex
} & TextInputProps<string>
export default memo(function NameInput({ setState, state, regex, disable = false }: NameInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => setState(value)
  return (
    <input
      type="text"
      name="name"
      placeholder="Name"
      minLength={3}
      pattern={regex.Pattern}
      title={regex.Message}
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black mx-1"
      value={state}
      onChange={handleOnChange}
      disabled={disable}
      required
    />
  )
})
