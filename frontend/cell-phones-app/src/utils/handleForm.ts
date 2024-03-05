import { userApiPath, userApiService } from "../services";

export async function handleForm<T>(
  inputs: T,
  message: string,
  path: userApiPath = ""
): Promise<boolean> {
  const { status, body } = await userApiService(JSON.stringify(inputs), path);

  if (![201, 200].includes(status)) {
    alert(body.error);
    return false;
  } else {
    const { token, name } = body;
    localStorage.setItem("token", token);
    localStorage.setItem("user", name);
    alert(message);
    return true;
  }
}
