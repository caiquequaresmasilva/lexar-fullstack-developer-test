import { ENVS } from "../envs";

export type userApiPath = "" | "/login";

export async function userApiService(body: string, path: userApiPath = "") {
  let status = 500;
  let resBody;
  try {
    const response = await fetch(`${ENVS["USER_API"]}user${path}`, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json",
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
