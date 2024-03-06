import { useEffect, useState } from "react";
import { productApiService } from "../services";

function useGetOptions() {
  const [brand, setBrand] = useState<Option[]>([]);
  const [color, setColor] = useState<Option[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const token = localStorage.getItem("token") || "";
      const [brands, colors] = await Promise.all([
        productApiService({
          path: "brand",
          token,
        }),
        productApiService({
          path: "color",
          token,
        }),
      ]);
      if (![brands.status, colors.status].every((s) => s == 200)) {
        alert(`${brands.body.error}.${colors.body.error}`);
      } else {
        setBrand(brands.body);
        setColor(colors.body);
      }
      setLoading(false);
    })();
  });

  return { brand, color, loading };
}

export default useGetOptions;
