import { memo, useState } from "react"
import { UserNameRegex, ProductNameRegex, debounceOnChange } from "../../utils"
type NameInputProps = {
  disable?: boolean
  regex: typeof UserNameRegex | typeof ProductNameRegex
  model?: boolean
} & TextInputProps<string>
export default memo(function NameInput({ setState, state, regex, model, disable = false }: NameInputProps) {
  const [error, setError] = useState('')
  const [localState, setLocalState] = useState(state)
  const handleOnChange = ({ target: { value } }: OnChangeType) => {
    if (RegExp(regex.Pattern).test(value)) {
      setState(value)
      setError('')
    } else {
      setError(regex.Message)
    }
  }
  const handle = (e: OnChangeType) => {
    setLocalState(e.target.value)
    debounceOnChange(handleOnChange, 1000)(e)
  }
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder={model ? "Model" : "Name"}
        className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black"
        value={localState}
        onChange={handle}
        disabled={disable}
        required
      />
      <p className="text-red-500 text-sm my-2">{error}</p>
    </>

  )
})
