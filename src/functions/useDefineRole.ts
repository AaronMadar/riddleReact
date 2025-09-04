// this function define the role of the player 
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function useDefineRole(obj) {
  const { setIsUser, setIsAdmin ,isUser,isAdmin} = useContext(AuthContext);

  switch (obj.data.data.role || obj.data.data[0].role) {
    case 'user':
      setIsUser(true);
      break;

    case 'admin':
      setIsAdmin(false);
      break;

    default:
        setIsAdmin(false)
        setIsUser(false)
        break
  }



}
