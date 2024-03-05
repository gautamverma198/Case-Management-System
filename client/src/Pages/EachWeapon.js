import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/EachWeapon.css"; // Import your CSS file

export default function EachWeapon() {
  const { uuid } = useParams();
  const [weapon, setWeapon] = useState(null);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/weapons/${uuid}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.skins);
        setWeapon(data.data);
      });
  }, [uuid]);

  if (!weapon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="eachWeapon-up">
        <img src={weapon.displayIcon} alt={weapon.displayName}></img>
        <h1>{weapon.displayName}</h1>
        <h3>{weapon.category.substring(21)}</h3>
      </div>
      <hr></hr>
      <div className="eachWeapon-up">
        <h2>Weapon Stats</h2>
        <div>
          <p>Fire Rate: {weapon.weaponStats.fireRate}</p>
          <p>Magazine Size: {weapon.weaponStats.magazineSize}</p>
          <p>Equip Time Speed: {weapon.weaponStats.equipTimeSeconds}</p>
          <p>Reload Time Speed: {weapon.weaponStats.reloadTimeSeconds}</p>
        </div>
      </div>
      <hr></hr>
      <div className="skin-container">
        <h1>SKINS</h1>
        {weapon.skins.map((skin) => (
          <div key={skin.uuid}>
            <img src={skin.displayIcon} alt={skin.displayName} />
            <div>
              <h2>{skin.displayName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
