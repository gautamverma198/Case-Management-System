import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Players.css"; // Import your CSS file

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setPlayers(data.data);
      });
  }, []);

  return (
    <>
      <div className="players-container">
        <h1>AGENTS</h1>
        <div className="players-grid">
          {players.map((player) => (
            <div key={player.uuid} className="player-card">
              <img src={player.displayIcon} alt={player.displayName} />
              <h2>{player.displayName}</h2>
              <p>{player.description}</p>
              <Link to={`/player/${player.uuid}`}>Learn more</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
