import { useNavigate } from "react-router-dom";
import { handleForm } from "../../../utils";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const flag = await handleForm<Inputs>(
      { name, email, password },
      "User created."
    );
    setName("");
    setEmail("");
    setPassword("");
    if (flag) {
      navigate("/home");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          title="The password must contain at least 8 characters, with uppercase letters, lowercase letters and numbers."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
