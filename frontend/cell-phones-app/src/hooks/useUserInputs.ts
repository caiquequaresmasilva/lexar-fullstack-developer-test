import { useState } from "react";

type Return = [
  { email: string; password: string; name: string },
  {
    setEmail: SetState<string>;
    setPassword: SetState<string>;
    setName: SetState<string>;
  }
];
export default function useUserInputs(): Return {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return [
    { email, password, name },
    { setEmail, setPassword, setName },
  ];
}
