import React from 'react'
import "../CSS/Client.css"
import img from "../Images/future.jpeg"
import { useNavigate } from 'react-router-dom'
const ClientUpper = () => {
    const navigate = useNavigate();
    const Learning = ()=>{
        navigate('/owner')
    }
    const LawyersList = ()=>{
        navigate('/lawyerslist')
    }
  return (
    <>

    <section class="middle">
        <h1>CaseFlow: Your Legal Companion</h1>
        <h2>On Its Way</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        <div>it up at the dealership later.</div>
        <div className='btn-middle'>
            <input onClick={Learning} type="button" value="Start Learning" class="btn"/>
            <input onClick={LawyersList} type="button" value="Search Lawyer" class="btn"/>
        </div>
    </section>

    <section class="utilities">
        <p class="h1">The World Of Technology</p>
        <p class="para1">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
    </section>

    <section class="future">
        <div class="futurecar">
            <img src={img} alt=""/>
        </div>
        <div class="concept">
            <p class="head">#FutureAnAttitude</p>
            <p className='line1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p class="line4">passion, and our visions for the future of mobility.</p>
            <input onClick={Learning} type="button" value="Start Learning"/>
        </div>
    </section>
    </>
  )
}
export default ClientUpper