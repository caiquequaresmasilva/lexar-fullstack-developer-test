import { EditForm} from "../../../components";

export default function AddFormContainer() {
  return (
    <div className="flex flex-col items-center  w-1/2 h-1/2 text-xl">
        <EditForm
          action="CREATE"
          message="Product created"
        />

    </div>
  )
}
