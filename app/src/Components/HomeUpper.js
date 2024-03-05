import React from 'react'
import "../CSS/Home.css"
import imgBack from "../Images/back.jpeg"
import { useNavigate } from 'react-router-dom'
const HomeUpper = () => {
    const navigate = useNavigate();
    const owner= ()=>{
        navigate('/owner')
    }
  return (
    <>
        <section class="back">
            <div class="backcar">
                <h1 class="backhead">CASE MANAGEMENT SYSTEM</h1>
                <p className='turn1'>Welcome to our comprehensive case management platform, where efficiency meets innovation. Our website is designed to streamline and enhance your case management processes, providing a centralized hub for collaboration, data analysis, and task automation.</p>
                <p className='turn1'>Whether you're a novice or an experienced developer, our platform provides a rich environment where you can delve into various SQL queries, including the intricacies of nested queries, the precision of deletion operations, and the power of aggregation.</p>
                <p className='turn1'>Click START LEARNING Below and start your SQL journey with us.</p>
                <input type="button" value="START LEARNING" onClick={owner}/>
            </div>
            <div class="backimg">
                <img src={imgBack} alt=""/>
            </div>
        </section>
    </>
  )
}
export default HomeUpper
