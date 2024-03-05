import React from "react";
import "../CSS/Home.css";
import HomeComponent from "../Components/HomeComponent";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home({ isSignedUp, isLoggedIn }) {
  const navigate = useNavigate();
  const navigateToSurveys = () => {
    navigate("/surveys");
  };
  const navigateToTournamentUpdates = () => {
    navigate("/updates");
  };
  return (
    <>
      <div className="home-container">
        <div className="login">
          {isSignedUp || isLoggedIn ? (
            <p>Hi, Welcome</p>
          ) : (
            <Link to="/login">
              <button className="big-button">Login/Signup</button>
            </Link>
          )}
        </div>
        <div className="content">
          <h1>VALORANT GAME CENTER</h1>
          <p>
            The purpose of this website is to offer Valorant players a platform
            where they can participate in surveys and earn in-game badges and
            rewards. By providing free surveys, the website aims to gather
            valuable insights and feedback from the gaming community. These
            surveys may cover various aspects of the game, such as gameplay
            mechanics, character abilities, map designs, and overall user
            experience.{" "}
          </p>

          <p>
            The surveys are designed to be engaging and relevant to Valorant
            players, offering them an opportunity to share their opinions and
            suggestions directly with the game developers. In return for their
            participation, players can earn exclusive in-game badges and
            rewards, enhancing their gaming experience and providing a sense of
            accomplishment.
          </p>

          <button onClick={navigateToSurveys} className="big-button">
            Take a Survey
          </button>
          <button onClick={navigateToTournamentUpdates} className="big-button">
            Tournament Updates
          </button>
        </div>
      </div>
      <HomeComponent />
    </>
  );
}

export default Home;
