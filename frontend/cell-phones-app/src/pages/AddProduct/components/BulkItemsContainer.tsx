import { memo } from "react"

interface BulkItemsProps {
  items: Omit<Product, 'id'>[]
}
export default memo(function BulkItemsContainer({ items }: BulkItemsProps) {
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
        {items.map((item, ind) => (
          <tr key={ind}>
            <td>{item.name}</td>
            <td>{item.brand}</td>
            <td>{item.model}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
          </tr>
        ))}

      </tbody>

    </table>
  )
})
