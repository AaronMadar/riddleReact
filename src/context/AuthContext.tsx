import { createContext, useState } from "react";


export const AuthContext = createContext(null);



export default function AuthProvider({children}){

//  check if connected or by input or by token   
const [isAuthenticated, setIsAuthenticated]= useState(false)

const login = ()=> setIsAuthenticated(true);

const logout = ()=> setIsAuthenticated(false);

// check if he is admin
const [isAdmin, setIsAdmin] = useState(false)
// check if he is user
const [isUser,setIsUser] = useState(false)




return (

    <AuthContext.Provider value={{isAuthenticated ,login ,logout , isAdmin, setIsAdmin, isUser, setIsUser}}>
        {children}
    </AuthContext.Provider>
)

}   

