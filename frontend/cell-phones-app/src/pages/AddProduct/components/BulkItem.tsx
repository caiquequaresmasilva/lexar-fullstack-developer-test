type BulkItemProps = {
  handleDelete: (id: string, name: string, price: number, color: string) => void
} & Product
export default function BulkItem({ id, name, model, brand, color, price, handleDelete
}: BulkItemProps) {
  const handleClick = () => {
    handleDelete(id, name, price, color)
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{model}</td>
      <td>{color}</td>
      <td>{price}</td>
      <td className="text-red-500 font-semibold cursor-pointer" onClick={handleClick}>DELETE</td>
    </tr>
  )
}
