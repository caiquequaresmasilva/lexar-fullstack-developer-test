import { useState } from "react";

type Return = [
  {
    name: string;
    brand: string;
    color: string;
    model: string;
    price: string;
  },
  {
    setName: SetState<string>;
    setBrand: SetState<string>;
    setModel: SetState<string>;
    setColor: SetState<string>;
    setPrice: SetState<string>;
  }
];
export default function useInputFields(inputs?: InputFields): Return {
  const [name, setName] = useState(inputs?.name || "");
  const [brand, setBrand] = useState(inputs?.brand || "");
  const [color, setColor] = useState(inputs?.color || "");
  const [model, setModel] = useState(inputs?.model || "");
  const [price, setPrice] = useState(
    inputs?.price ? inputs?.price.toString() : ""
  );
  return [
    { name, brand, color, model, price },
    { setName, setBrand, setModel, setColor, setPrice },
  ];
}
