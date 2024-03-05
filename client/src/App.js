import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Players from './Pages/Players';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import EachPlayer from './Pages/EachPlayer';
import { useState } from 'react';
import Surveys from './Pages/Surveys';
import TournamentUpdates from './Pages/TournamentUpdates';
import About from './Pages/About';
import Weapons from './Pages/Weapons';
import EachWeapon from './Pages/EachWeapon';
import { Helmet } from 'react-helmet';


function App() {
  const [isSignedUp, setSignup] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <>
      <Helmet>
        <title>Valorant Game Center</title>
        <link rel="icon" type="image/png" href="./Images/icon.jpeg" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home isSignedUp={isSignedUp} isLoggedIn = {isLoggedIn}/>} 
          />
          <Route path="/players" element={<Players />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path='/surveys' element={<Surveys/>}/>
          <Route path ="/updates" element={<TournamentUpdates/>}/>
          <Route path="/player/:uuid" element={<EachPlayer />} />
          <Route path="/weapon/:uuid" element={<EachWeapon />} />
          <Route path="/about" element={<About/>}/>
          <Route
            path="/signup"
            element={<SignupForm setSignup={setSignup} />}
          />
          <Route
            path="/login"
            element={<LoginForm setLogin={setLogin} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
