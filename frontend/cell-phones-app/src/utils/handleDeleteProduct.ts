import { productApiService } from "../services";

export async function handleDeleteProduct(id: string): Promise<boolean> {
  const token = localStorage.getItem("token") || "";
  const { status, body } = await productApiService({
    path: `product/${id}`,
    method: "DELETE",
    token,
  });

  if (status != 200) {
    alert(body.error);
    return false;
  } else {
    alert("Product deleted");
    return true;
  }
}
