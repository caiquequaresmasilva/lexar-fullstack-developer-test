import { ENVS } from "../envs";

export type Method = "GET" | "POST" | "PUT" | "DELETE";

interface FetchParams {
  token: string;
  path?: string;
  body?: string;
  method?: Method;
}

export async function productApiService({
  path = "product",
  method = "GET",
  token = "",
  body,
}: FetchParams) {
  let status = 500;
  let resBody;
  try {
    const response = await fetch(`${ENVS["PRODUCT_API"]}${path}`, {
      method,
      body,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    (status = response.status), (resBody = await response.json());
  } catch (error) {
    resBody = {
      message: "An unexpected error has occurred.",
    };
    console.log(error);
  }
  return {
    status,
    body: resBody,
  };
}
