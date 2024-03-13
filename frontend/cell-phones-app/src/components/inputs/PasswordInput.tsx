import { memo } from "react"
import { PasswordRegex } from "../../utils"

type PasswordInputProps = {
  regex: typeof PasswordRegex
} & TextInputProps<string>
export default memo(function PasswordInput({ setState, state, regex }: PasswordInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => setState(value)
  return (
    <input
      type="password"
      name="password"
      placeholder='Password'
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
      pattern={regex.Pattern}
      title={regex.Message}
      value={state}
      onChange={handleOnChange}
      required
    />
  )
})
