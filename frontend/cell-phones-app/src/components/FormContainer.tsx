import { Link } from "react-router-dom"
interface FormContainerProps {
  children: React.ReactNode
  linkHref: string
  linkName: string
}

function FormContainer({ children, linkHref, linkName }: FormContainerProps) {
  return (
    <div>
      {children}
      <Link to={linkHref}>{linkName}</Link>
    </div>
  )
}

export default FormContainer