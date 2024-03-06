import { useEffect, useState } from "react";
import { productApiService } from "../services";

function useFetch<T>(path: string, dat: T) {
  const [data, setData] = useState(dat);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const { status, body } = await productApiService({
        path,
        token: localStorage.getItem("token") || "",
      });
      if (status !== 200) {
        alert(body.message);
      } else {
        setData(body);
      }
      setLoading(false);
    })();
  }, [path]);

  return { data, loading };
}

export default useFetch;
