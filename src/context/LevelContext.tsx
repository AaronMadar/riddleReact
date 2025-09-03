import { createContext, useState } from "react"

export const LevelContext = createContext()


export default function LevelProvider({children}){

    let [level,setLevel] = useState("")


    return (
        <LevelContext.Provider value={{level,setLevel}}>
            {children}
        </LevelContext.Provider>
    )

}