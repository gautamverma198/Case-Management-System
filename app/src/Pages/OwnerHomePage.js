import React from 'react'
import "../CSS/Owner.css"
import { useNavigate } from 'react-router-dom'
const Owner = () => {
    const navigate = useNavigate();
    const ownerClient = ()=>{
        navigate('/clientInfo')
    }
    const promptToCLient = ()=>{
        alert("Please Refer to Clients Table as this table is still under construction.")
    }
  return (
    <>
    <section className='headOwner'>
        <h2>Learn Different SQL Queries by Selecting Tables</h2>
        <p>Embark on a journey of SQL mastery with our cutting-edge case management website. Dive into the intricacies of database management by selecting from a trio of pivotal tables: Clients, Legal Professionals, and Assistants. Our platform offers an unparalleled learning experience where you can elevate your SQL expertise in a hands-on and user-friendly manner. Choose your focus and immerse yourself in practical lessons that unravel the complexities of SQL queries.</p>

        <p>Navigate through the nuances of <b>each table</b>, gaining a profound understanding of data manipulation within the context of case management. From the Clients table, explore how to retrieve and filter essential client information. Delve into the Legal Professionals table to master the art of joining tables and extracting valuable insights. With the Assistants table, uncover the power of aggregation and enhance your ability to analyze data comprehensively.</p>

        <p>Our platform provides a dynamic and engaging environment, ensuring that you not only learn SQL queries but also apply them practically to real-world scenarios. Whether you're a beginner eager to grasp the fundamentals or an experienced developer seeking advanced techniques, our website empowers you to learn SQL in a way that is not only educational but also enjoyable. Elevate your skills, optimize your case management processes, and embrace the limitless possibilities of data manipulation with our immersive SQL learning experience. Welcome to a realm where mastering SQL is made accessible, practical, and transformative.</p>
    </section>
    <div className='ownerContainer'>
        <div class="column">
            <h2>CLIENT INFO</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button onClick={ownerClient}>CLIENT INFO</button>
        </div>

        <div class="column">
            <h2>LEGAL PROFESSIONAL</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button onClick={promptToCLient}>LAWYERS INFO</button>
        </div>

        <div class="column">
            <h2>ASSISTANTS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button onClick={promptToCLient}>ASSISTANTS INFO</button>
        </div>
    </div>
    </>
  )
}
export default Owner
