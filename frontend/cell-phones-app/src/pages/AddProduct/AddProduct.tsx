import { useState } from "react"
import { AddFormContainer, BulkAddFormContainer } from "./components"

function AddProduct() {
  const [regularAdd, setRegularAdd] = useState(true)

  return (
    <main className='w-full h-screen px-4 flex flex-col justify-start items-center'>
      <div className="flex w-full">
        <button
          onClick={() => setRegularAdd(true)}
          className={`mr-4 hover:text-green-500 ${regularAdd ? "text-green-500" : "text-zinc-100"}`}
        >
          REGULAR
        </button>
        <button
          onClick={() => setRegularAdd(false)}
          className={`ml-4 hover:text-green-500 ${!regularAdd ? "text-green-500" : "text-zinc-100"}`}
        >
          BULK
        </button>
      </div>
      {regularAdd ? <AddFormContainer /> : <BulkAddFormContainer />}

    </main>
  )
}

export default AddProduct
