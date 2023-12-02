import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  function handlesubmit() {
    return axios
      .post("http://localhost:3000/signup", { email, password })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <input
        value={email}
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      ></input>
      <button onClick={handlesubmit}>Click me</button>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
}
