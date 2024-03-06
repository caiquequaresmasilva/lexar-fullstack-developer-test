import { useState } from "react"
import { AddFormContainer, BulkAddFormContainer } from "./components"

function AddProduct() {
  const [regularAdd, setRegularAdd] = useState(true)

  return (
    <main>
      <div>
        <button
          onClick={() => setRegularAdd(true)}
          className={regularAdd ? "text-green-500 font-bold" : "text-green-800 font-bold"}
        >
          REGULAR ADD
        </button>
        <button
          onClick={() => setRegularAdd(false)}
          className={!regularAdd ? "text-green-500 font-bold" : "text-green-800 font-bold"}
        >
          BULK ADD
        </button>
      </div>
      {regularAdd ? <AddFormContainer /> : <BulkAddFormContainer />}

    </main>
  )
}

export default AddProduct
