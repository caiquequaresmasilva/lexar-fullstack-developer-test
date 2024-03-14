import { memo, useState } from "react"
import { PasswordRegex, debounceOnChange } from "../../utils"

export default memo(function PasswordInput({ setState }: TextInputProps<string>) {
  const [error, setError] = useState('')
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (RegExp(PasswordRegex.Pattern).test(value)) {
      setState(value)
      setError('')
    } else {
      setError(PasswordRegex.Message)
    }
  }
  return (
    <>
      <input
        type="password"
        name="password"
        placeholder='Password'
        className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
        onChange={debounceOnChange(handleOnChange, 1000)}
        required
      />
      <p className="text-red-500 text-sm">{error}</p>
    </>
  )
})
