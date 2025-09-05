import '../style/HomePage.css';
import { isTokenValid } from '../functions/isTokenValid';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); // créer navigate

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenValid(token)) {
      navigate("/levelselection"); // si token valide → redirige direct
    } else {
      localStorage.removeItem("token"); // sinon on nettoie
    }
  }, []);

  return (
    <>
      <h1>Riddle Quizz</h1>
      <p>
        Welcome to the Riddle Challenge! This app is designed to assess your
        mental performance and test your quick thinking. Enjoy!
      </p>
      <section>
        <button onClick={() => navigate("/levelselection")}>Launch Game</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/subscribe")}>To subscribe</button>
      </section>
    </>
  );
}
