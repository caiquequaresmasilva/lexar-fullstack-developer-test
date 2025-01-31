import { productApiService } from "../services";
type Method = "POST" | "PUT";
type FormProduct = Omit<Product, "id"> | ProductType2 | ProductType3[];

type ProductFormParams = {
  product: FormProduct;
  token: string;
  message: string;
  id?: string;
  method?: Method;
};
export async function handleProductForm({
  id = "",
  method = "POST",
  token = "",
  product,
  message,
}: ProductFormParams): Promise<boolean> {
  const { status, body } = await productApiService({
    path: `product/${id}`,
    body: JSON.stringify(product),
    method,
    token,
  });

  if (![200, 201].includes(status)) {
    alert(body.error);
    return false;
  } else {
    alert(message);
    return true;
  }
}
