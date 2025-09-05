import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import  getRole  from "../functions/getRole.js"
import useDefineRole from "../functions/useDefineRole";
import { useNavigate } from "react-router";

export default function SubscribePage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()



  const { login } = useContext(AuthContext)

  async function handleClick(e) {
    e.preventDefault()
    try {
      const userdetails = { username, password };
      const response = await fetch("http://localhost:3000/users/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdetails),
      });

      if (!response.ok) {
        console.log(`Subscirbe failed: ${response.status} ${response.statusText}`);
        setErrorMessage(`Subscribe failed: ${response.status} ${response.statusText}`);
        return false;
      }

      const result = await response.json();
      console.log("You subscribed successfully!");
      console.log("Résultat:", result);
      login()
      localStorage.setItem('token', result.data.token)
      useDefineRole(result)
      let role = getRole(result)
      if (role === 'user') navigate('/game')
      if (role === 'admin') navigate('/admin')


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
        <input type="text" placeholder="Enter your name" onChange={(e) => { setUsername(e.target.value); setErrorMessage("") }} value={username} required />
        <input type="password" placeholder="create a password" onChange={(e) => { setPassword(e.target.value); setErrorMessage("") }} value={password} required />
        <button type="submit">subscribe</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

    </>

  )
}