import React from "react";
import "../CSS/HomeComponent.css";
import { useNavigate } from "react-router-dom";
const HomeComponent = () => {

  const navigate = useNavigate();
  const navigateToPlayers = () => {
    navigate("/players");
  };
  const navigateToWeapons = () => {
    navigate("/weapons");
  };
  return (
    <>
      <div class="HomeComponent">
        <div class="column">
          <div class="content">
            <h3>PLAYERS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button onClick={navigateToPlayers}>Search</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h3>WEAPONS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button onClick={navigateToWeapons} >Search</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <h3>MAPS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <button onClick={()=>{alert("UNDER CONSTRUCTION")}}>Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
