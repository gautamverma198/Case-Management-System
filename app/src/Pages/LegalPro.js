import React from 'react'
import img from "../Images/back.jpeg"
import "../CSS/Legal.css"
import { useNavigate } from 'react-router-dom'
const LegalPro = () => {
    const navigate = useNavigate();
    const assistantList = ()=>{
        navigate('/assistantList');
    }
  return (
    <>
        <div className='legal-head'>
            <h1>LEGAL PROGRFESSIONAL PAGE</h1>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
         <div class="column-container">
            <div class="column">
                <img src={img} alt="Image 1"/>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button onClick={assistantList}>Button 1</button>
                </div>

                <div class="column">
                <img src={img}  alt="Image 2"/>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Button 2</button>
                </div>

                <div class="column">
                <img src={img}  alt="Image 3"/>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Button 3</button>
            </div>
        </div>
    </>
  )
}
export default LegalPro
