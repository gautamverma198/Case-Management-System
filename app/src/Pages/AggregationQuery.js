import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../CSS/Aggregation.css"

const Aggregation = () => {
    const [users, setUsers] = useState([]);

    const handleCount = (event) => {
        getUsers(event.target.value);
        const min = document.getElementById('min');
        const max = document.getElementById('max');
        const count = document.getElementById('count');

        if (count.style.display === 'none') {
            count.style.display = 'block';
        }
        if (max.style.display === 'block') {
            max.style.display = 'none';
        }
        if (min.style.display === 'block') {
            min.style.display = 'none';
        }

    };

    const handleMin = (event) => {
        getUsers(event.target.value);
        const min = document.getElementById('min');
        const max = document.getElementById('max');
        const count = document.getElementById('count');

        if (min.style.display === 'none') {
            min.style.display = 'block';
        }
        if (max.style.display === 'block') {
            max.style.display = 'none';
        }
        if (count.style.display === 'block') {
            count.style.display = 'none';
        }

    };

    const handleMax = (event) => {
        getUsers(event.target.value);
        const min = document.getElementById('min');
        const max = document.getElementById('max');
        const count = document.getElementById('count');

        if (max.style.display === 'none') {
            max.style.display = 'block';
        }
        if (count.style.display === 'block') {
            count.style.display = 'none';
        }
        if (min.style.display === 'block') {
            min.style.display = 'none';
        }

    };

    function getUsers(e) {
        axios.get(`http://localhost:80/clients/${e}`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
        console.log(e);
    }

    return (
        <>
            <section id="projection">
                <h2>Welcome to Aggregation Query</h2>
                <p>An aggregation query is a powerful tool in database management that allows you to analyze and summarize data by applying aggregate functions to groups of rows. These functions, such as <b>COUNT, SUM, AVG, MIN, and MAX,</b> enable the computation of statistics or other operations on a set of values within a specified column. The GROUP BY clause is often used in conjunction with aggregate functions to organize data into groups based on one or more columns.</p>
                <a href=''style={{color:"black" , cursor:"pointer"}}>CREATE NEW CLIENT</a>
                <p>----New Client Info will display at the end of the table----</p>
                <p>Here, We are using only count , min and max functions.</p>
                <p><b>COUNT</b>: Total number of Clients in the table</p>
                <p><b>MIN</b>: Client with Minimum ID.</p>
                <p><b>MAX</b>: Client with Maximum ID.</p>
            </section>
            <div className='aggreContainer'>
                <h3>
                    CHECK COUNT, MIN AND MAX
                </h3>
                <div>
                    <button value="count" onClick={handleCount}>Count</button>
                    <button value="min" onClick={handleMin}>MIN ID</button>
                    <button value="max" onClick={handleMax}>MAX ID</button>
                </div>
            </div>

            <div id='count' style={{ width:"200px" , margin: "auto",display: 'none' }}>
                <h3>COUNT</h3>
                {users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.total_rows}</td>
                    </tr>
                )}
            </div>
            <div id='max' style={{ width:"200px" , margin: "auto",display: 'none' }}>
                <h3>MAX ID</h3>
                {users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.max_id}</td>
                    </tr>
                )}
            </div>
            <div  id='min' style={{ width:"200px" , margin: "auto",display: 'none' }}>
                <h3>MIN</h3>
                {users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.min_id}</td>
                    </tr>
                )}
            </div>
        </>
    )
}
export default Aggregation
