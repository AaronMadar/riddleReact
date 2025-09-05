import { useNavigate } from "react-router"

export default function AdminPage(){
    const navigate = useNavigate

    return (<>
    <h1>Welcome in Admin Page</h1>
    <button onClick={() => navigate("/createnewriddle")}>Create New Riddle</button>
    <button onClick={() => navigate("/getallriddle")}>Read All Riddle</button>
    <button onClick={() => navigate("/updateriddle")}>Update a Riddle</button>
    <button onClick={() => navigate("/deleteriddle")}>Delete a riddle</button>
    
    
    </>
    )
}