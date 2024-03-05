import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "../CSS/ClientForm.css"
import { useNavigate } from 'react-router-dom'

const LegalProForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get('http://localhost:80/clients/legalprofessional/get').then(function(response){
      console.log(response.data);
      const userFound = response.data.find(user => user.email === email && user.password === password);

      if (userFound) {
        console.log('Login successful');
        navigate(`${userFound.ID}/staff`)
      } else {
        console.log('Invalid email or password');
        alert("Please Enter Valid Email and Password");
      }
    });
  }
  return (
    <>

    <div class="form-container" onSubmit={handleSubmit}>
        <h2>WELCOME BACK </h2>
        <h6>LOG IN AS STAFF MEMBER</h6>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)}/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Log In</button>
        </form>
    </div>
    </>
  )
}
export default LegalProForm
