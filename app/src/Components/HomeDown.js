import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ClientForm from '../Pages/ClientForm';
import img from "../Images/future.jpeg"

const HomeDown = () => {
  const navigate = useNavigate();
  const clientForm = () => {
    navigate('/newclient');
  }
  const exClientForm = () => {
    navigate('/excistingclient');
  }
  const staff = () => {
    navigate('/stafflogin');
  }
  const Learning = ()=>{
    navigate('/owner');
  }
  return (
    <>
      <div class="container">
        <div class="homeColumn">
          <h2>NEW CLIENT</h2>
          <p>Register as a new client, create a new client profile, and explore the learning section to check the status of your query.</p>
          <p>Connect with nearby lawyers effortlessly with just one click.</p>
          <button className="button" onClick={clientForm}>NEW CLIENT</button>
        </div>
        <div class="homeColumn">
          <h2>EXCISTING CLIENT</h2>
          <p>As an existing client, explore the latest list of lawyers or initiate learning queries in the Learning Section.</p>
          <p>Check out the new Queries added in the leaning section.</p>
          <button className="button" onClick={exClientForm}>EXCISTING CLIENT</button>
        </div>
        <div class="homeColumn">
          <h2>STAFF</h2>
          <p>This Page is not yet build completely.</p>
          <p>Stay Tuned for more updates!</p>
          <button className="button" onClick={staff}>STAFF</button>
        </div>
      </div>

      <div className='homeDownDiv'>
        <section class="utilities">
          <p class="h1">CASE MANEGEMENT SYSTEM</p>
          <p class="para1">Lorem ipsum dolor sit amet, consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vel lacus dapibus iaculis Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero vel lacus dapibus iaculis Lorem ipsum dolor sit amet, </p>
        </section>
        <section class="future">
          <div class="futurecar">
            <img src={img} alt="" />
          </div>
          <div class="concept">
            <p class="head">#FutureAnAttitude</p>
            <p className='line1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p class="line4">passion, and our visions for the future of mobility.</p>
            <input onClick={Learning} type="button" value="Start Learning" />
          </div>
        </section>
      </div>

    </>
  )
}
export default HomeDown