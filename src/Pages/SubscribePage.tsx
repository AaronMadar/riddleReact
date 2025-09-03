import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SubscribePage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const { login } = useContext(AuthContext)

  async function handleClick(e) {
    e.preventDefault()
    try {
      const userdetails = { username, password };
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdetails),
      });

      if (!response.ok) {
        console.log(`Signup failed: ${response.status} ${response.statusText}`);
        setErrorMessage(`Signup failed: ${response.status} ${response.statusText}`);
        return false;
      }

      const result = await response.json();
      console.log("You are signed up!");
      console.log("Résultat:", result);
      login()

      return true;
    } catch (e) {
      console.log("Server error:", e.message);
      setErrorMessage(`Server error: ${e.message} `);
      return false;
    }
  }

  return (

    <>
      <h1>Subscribe Page</h1>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="Enter your name" onChange={(e) => { setUsername(e.target.value) }} value={username} required />
        <input type="password" placeholder="create a password" onChange={(e) => { setPassword(e.target.value) }} value={password} required />
        <button type="submit">subscribe</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

    </>

  )
}