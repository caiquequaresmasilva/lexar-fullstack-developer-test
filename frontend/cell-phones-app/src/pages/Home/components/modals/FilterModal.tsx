import { useAppDispatch, useAppSelector } from "../../../../redux/hooks"
import { selectOpenFilter, toggleFilterModal } from "../../../../redux/modalSlice"
import { useFilterFields } from "../../../../hooks"
import { setFilters } from "../../../../redux/filterSlice"
import { BrandInput, ColorInput, MaxPriceInput, MinPriceInput } from "../../../../components"

interface FilterModalProps {
  colors: Option[],
  brands: Option[]
}
export default function FilterModal({ brands = [], colors = [] }: FilterModalProps) {
  const open = useAppSelector(selectOpenFilter)
  const dispatch = useAppDispatch()
  const [
    { brand, color, maxPrice, minPrice },
    { setBrand, setColor, setMaxPrice, setMinPrice }
  ] = useFilterFields()

  const handleClose = () => dispatch(toggleFilterModal())


  const handleForm = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setFilters({
      brand,
      color,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice)
    }))
    dispatch(toggleFilterModal())
  }
  return (
    <div className={`fixed z-50 inset-0 flex justify-center items-center ${open ? "visible bg-black/90" : "invisible"}`}>
      <div className="bg-green-100 w-[35%] h-[40%] rounded-xl p-4 flex flex-col justify-between cursor-default">
        <form className="flex flex-col justify-between items-center h-[80%] " onSubmit={handleForm}>

          <div className="flex text-black w-full justify-evenly font-semibold">
            <BrandInput brands={brands} state={brand} setState={setBrand} />
            <ColorInput colors={colors} state={color} setState={setColor} />
          </div>

          <div className="flex text-black w-full justify-center font-semibold">
            <MinPriceInput state={minPrice} setState={setMinPrice} />
            <MaxPriceInput state={maxPrice} setState={setMaxPrice} />
          </div>
          <button className="text-green-900 font-bold hover:text-green-500" type="submit">FILTER</button>
        </form>
        <button className="text-black font-bold" onClick={handleClose}>CLOSE</button>
      </div>
    </div>
  )
}
