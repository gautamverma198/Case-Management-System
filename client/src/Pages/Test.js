// PlayerDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Test() {
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
    <div>
      <h2>{player.displayName}</h2>
      <p>{player.description}</p>
      {/* {console.log(uuid)} */}
    </div>
  );
}
