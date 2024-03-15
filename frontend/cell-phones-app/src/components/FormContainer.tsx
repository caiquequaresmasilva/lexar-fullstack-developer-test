import { Link } from "react-router-dom"
interface FormContainerProps {
  children: React.ReactNode
  linkHref: string
  linkName: string
}

function FormContainer({ children, linkHref, linkName }: FormContainerProps) {
  return (
    <div className="flex flex-col items-center w-1/2 h-fit text-xl justify-evenly">
      {children}
      <Link className="text-white hover:text-green-600 mt-4" to={linkHref}>{linkName}</Link>
    </div>
  )
}

export default FormContainer