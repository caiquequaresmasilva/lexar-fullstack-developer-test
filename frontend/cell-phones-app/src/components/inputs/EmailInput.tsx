import { memo, useState } from "react"
import { EmailRegex, debounceOnChange } from "../../utils"

export default memo(function EmailInput({ setState }: TextInputProps<string>) {
  const [error, setError] = useState('')
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (RegExp(EmailRegex.Pattern).test(value)) {
      setState(value)
      setError('')
    } else {
      setState('')
      setError(EmailRegex.Message)
    }
  }
  return (
    <>
      <input
        type="text"
        name="email"
        placeholder='Email'
        className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded"
        onChange={debounceOnChange(handleOnChange,1000)}
      />
      <p className="text-red-500 text-sm my-2">{error}</p>
    </>

  )
})
