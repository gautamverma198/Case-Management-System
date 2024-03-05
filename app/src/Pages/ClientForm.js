import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../CSS/ClientForm.css"
import { useNavigate } from 'react-router-dom'

const ClientForm = () => {
  const navigate = useNavigate();
  const[values , setValues] = useState({});
  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setValues(values =>({...values , [name]:value}))
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:80/clients/clients/save',values).then(function(response){
      console.log(values.email)
      nav(values.email);
    });
  }

  const nav = (email)=>{
    axios.get(`http://localhost:80/clients/clients/nav/${email}`).then(function(response){
      console.log(response.data[0].ID);
      navigate(`/excistingclient/${response.data[0].ID}/client`)
    });
  }
  return (
    <>
    <div class="form-container">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={handleChange}/>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleChange}/>

          <label for="phone">Phone:</label>
          <input type="text" id="phone" name="phone" required onChange={handleChange}/>

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={handleChange}/>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}
export default ClientForm
