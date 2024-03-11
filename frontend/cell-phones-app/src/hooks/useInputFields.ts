import { useState } from "react";

export default function useInputFields(inputs?: InputFields) {
  const [name, setName] = useState(inputs?.name || "");
  const [brand, setBrand] = useState(inputs?.brand || "");
  const [color, setColor] = useState(inputs?.color || "");
  const [model, setModel] = useState(inputs?.model || "");
  const [price, setPrice] = useState(inputs?.price || 100);
  return [
    { name, brand, color, model, price },
    { setName, setBrand, setModel, setColor, setPrice },
  ];
}
