import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../CSS/ClientForm.css"

const CaseForm = () => {

  const[values , setValues] = useState({});
  const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setValues(values =>({...values , [name]:value}))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:80/clients/cases/save', values);
      console.log(response.data);
    } catch (error) {
      console.error('Error during POST request:', error);
    }
  
    console.log(values);
  };
  return (
    <>
    <div class="form-container">
        <h2>CASE REGISTRATION FORM</h2>
        <form onSubmit={handleSubmit}>
          <label for="type">Case Type:</label>
          <input type="text" id="type" name="type" required onChange={handleChange}/>

          <label for="desc">Please Provide Description</label>
          <textarea id="desc" name="desc" rows="4" cols="50" onChange={handleChange} ></textarea>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}
export default CaseForm
