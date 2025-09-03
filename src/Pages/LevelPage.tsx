import { useContext } from "react"
import LevelProvider, { LevelContext } from "../context/LevelContext"

export default function LevelPage(){
   
        const [level,setLevel] = useContext(LevelContext)
        

    return (
        
    <>
      <h1>Please select a level</h1>
      <button onClick={() => setLevel("Easy")}>Easy</button>
      <button onClick={() => setLevel("Medium")}>Medium</button>
      <button onClick={() => setLevel("Hard")}>Hard</button>
      <p>Selected level: {level}</p>
    </>

       
    )
}