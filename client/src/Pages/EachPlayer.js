// PlayerDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/EachPlayer.css"; // Import your CSS file

export default function EachPlayer() {
  const { uuid } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents/${uuid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setPlayer(data.data);
      });
  }, [uuid]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div className="player-details">

      <div className="player-info" style={{display:'flex' , flexDirection:'column'}}>

        <div className="player-portrait">
          <img src={player.bustPortrait} alt={player.displayName} />
        </div>

        <div className="player-description">
          <h2>{player.displayName}</h2>
          <p>{player.description}</p>
          <p><strong>Developer Name:</strong> {player.developerName}</p>
          <p><strong>Role:</strong> {player.role.displayName}</p>
        </div>

      </div>

      <div className="abilities">
        <h3>Abilities</h3>
        {player.abilities.map((ability, index) => (
          <div key={index} className="ability">
            <h4>{ability.displayName}</h4>
            <p>{ability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
