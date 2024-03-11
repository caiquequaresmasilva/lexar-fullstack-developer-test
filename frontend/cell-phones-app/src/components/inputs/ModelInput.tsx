import { memo } from "react"

export default memo(function ModelInput({ setState, state }: TextInputProps<string>) {
  const handleOnChange = (e: OnChangeType) => setState(e.target.value)
  return (
    <input
      type="text"
      name="model"
      className="bg-zinc-100 placeholder-zinc-600 focus:border-green-600 focus:outline-none focus:border-2 p-2 rounded text-black"
      minLength={3}
      placeholder='Model'
      value={state}
      onChange={handleOnChange}
      required
    />
  )
})
