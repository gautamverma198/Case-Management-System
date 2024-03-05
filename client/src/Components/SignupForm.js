import React, { useState } from 'react';
import '../CSS/Forms.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignupForm = ({setSignup}) => {
    const navigate = useNavigate();
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmemail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signupFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        if(email === confirmemail && password === confirmPassword)
        {
            const user = {
                FirstName: firstname,
                LastName: lastname,
                Email: email,
                Password: password 
            }

            axios.post('http://localhost:8080/createuser', user)
              .then(function (response) {
                alert(response.data);
                setSignup(true);
                navigate('/');
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else{
            alert('Please check your email or password');
        }
    }

    return (
        <div className="login-container">
            <h2>Signup Form</h2>
            <form id="signupForm" onSubmit={signupFormSubmission}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmEmail">Confirm Email</label>
                    <input type="email" id="confirmEmail" name="confirmEmail" value={confirmemail} onChange={(e) => setConfirmEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignupForm;
