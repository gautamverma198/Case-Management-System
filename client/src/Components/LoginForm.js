import React, { useState } from 'react'
import '../CSS/Forms.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setLogin}) => {
  const navigate = useNavigate();
  const [loginEmail , setLoginEmail] = useState("");
  const [loginPassword , setLoginPassword] = useState("");

  const loginFormSubmission = (e)=>{
    e.preventDefault();
    axios.get("http://localhost:8080/users").then(function (response) {
    console.log(response.data);
    const users = response.data;
    const user = users.find(user => user.Email === loginEmail && user.Password === loginPassword);
    if (user) {
      alert("Welcome Back");
      setLogin(true);
      navigate('/');
    }
    
  });
  }

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form id="login-form" onSubmit={loginFormSubmission}>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" value={loginPassword} required onChange={(e) => setLoginPassword(e.target.value)}/>
        </div>
        <button class = "signupButton" type="submit">Login</button>
        <p>Dont have an account?</p>
        <Link className = "" to = {`/signup`}>Create now</Link>
    </form>
</div>
  )
}

export default LoginForm
