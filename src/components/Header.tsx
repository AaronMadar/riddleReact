import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <header>

            <button onClick={() => navigate("/")}>Home</button>


            {!isAuthenticated && (<button onClick={() => navigate("/login")}>Login</button>)}
            {isAuthenticated && (<button
                    onClick={() => {
                        logout();
                        navigate("/"); // retourne à Home après logout
                    }}
                >
                    Logout
                </button>
            )}
        </header>
    );
}
