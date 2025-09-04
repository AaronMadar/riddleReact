import { useContext, useState } from "react"
import {AuthContext} from "../context/AuthContext"
import useDefineRole from '../functions/useDefineRole.ts'




export default function LoginPage(){

    const [username,setusername] = useState("")
    const [password,setpassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("");
    const {login} = useContext(AuthContext)

    async function Handleclick(e){  
        e.preventDefault()

    try {
        const userdetails = { username, password };
        const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdetails),
        });

        if (!response.ok) {
        console.log(`Login failed: ${response.status} ${response.statusText}`);
        setErrorMessage(`Login failed: ${response.status} ${response.statusText}`);
        return false;
        }

        const result = await response.json();
        console.log("You are logged in!");
        console.log("Résultat:", result);
        login()
        localStorage.setItem("token", result.data.token)
        
        
        useDefineRole(result)
        return true;
  } catch (e) {
    console.log("Server error:", e.message);
    setErrorMessage(`Server error: ${e.message}`);
    return false;
  }
    }


    return (
        <>
        <h1>LOGIN PAGE</h1>
        <form onSubmit={Handleclick}>
            
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setusername(e.target.value); setErrorMessage("")}} value={username} required />
    <input type="password"  placeholder="Enter your password" onChange={(e)=>{setpassword(e.target.value);setErrorMessage("")}} value={password} required />
        <button type="submit">Login</button>
        </form>
        {errorMessage  && <p style={{ color: "red" }}>{errorMessage}</p>}
        
        
        </>

    )
}