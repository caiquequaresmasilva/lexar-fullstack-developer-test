import { memo } from "react"

type EmailInputProps = {
  disable?: boolean
} & TextInputProps<string>
export default memo(function EmailInput({ setState, state, disable = false }: EmailInputProps) {
  const handleOnChange = ({ target: { value } }: OnChangeType) => setState(value)
  return (
    <input
      type="email"
      name="email"
      placeholder='Email'
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
      value={state}
      onChange={handleOnChange}
      disabled={disable}
      required
    />
  )
})
