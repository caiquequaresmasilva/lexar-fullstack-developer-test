import { useState } from "react";

type Return = [
  {
    brand: string;
    color: string;
    minPrice: string;
    maxPrice: string;
  },
  {
    setBrand: SetState<string>;
    setColor: SetState<string>;
    setMinPrice: SetState<string>;
    setMaxPrice: SetState<string>;
  }
];
export default function useFilterFields(): Return {
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return [
    { brand, color, minPrice, maxPrice },
    { setBrand, setColor, setMaxPrice, setMinPrice },
  ];
}
