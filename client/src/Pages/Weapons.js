import React, { useEffect, useState } from "react";
import '../CSS/Weapons.css'
import { Link } from "react-router-dom";
const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setWeapons(data.data);
      });
  }, []);

  return (
    <>
      <div className="weapons-container">
        <h1>WEAPONS</h1>
        <div className="weapons-grid">
          {weapons.map((weapon) => (
            <div key={weapon.uuid} className="weapon-card">
              <img src={weapon.displayIcon} alt={weapon.displayName} />
              <div style={{marginLeft : "auto"}}>
                <h2>{weapon.displayName}</h2>
                <h2>{weapon.category.substring(21)}</h2>
                <Link to={`/weapon/${weapon.uuid}`}>Learn more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Weapons;
