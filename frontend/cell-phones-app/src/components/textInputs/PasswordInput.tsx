import { memo } from "react"

export default memo(function PasswordInput({ setState, state }: TextInputProps<string>) {
  const handleOnChange = (e: OnChangeType) => setState(e.target.value)
  return (
    <input
      type="password"
      name="password"
      placeholder='Password'
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
      pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
      title='The password must contain at least 8 characters, with uppercase letters, lowercase letters and numbers.'
      value={state}
      onChange={handleOnChange}
      required
    />
  )
})
