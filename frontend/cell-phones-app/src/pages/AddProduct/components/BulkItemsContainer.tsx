import { memo } from "react"
import { BulkItem } from "."

interface BulkItemsProps {
  items: Product[]
  handleDelete: (id: string, name: string, price: number, color: string) => void
}
export default memo(function BulkItemsContainer({ items, handleDelete }: BulkItemsProps) {
  return (
    <table className="w-[80%] mt-2 bg-zinc-400 text-center rounded text-green-900">
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="bg-zinc-300 text-zinc-900">
        {items.map((item) => (
          <BulkItem {...item} key={item.id} handleDelete={handleDelete} />
        ))}

      </tbody>

    </table>
  )
})
