import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const JoinQuery = () => {
    const[users, setUsers] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        getUsers();
    };

    function getUsers() {
        axios.get(`http://localhost:80/clients/get`).then(function (response) {
        console.log(response.data);
        setUsers(response.data);
        });
    }

  return (
    <>
         <section id="projection">
            <h2>Welcome to Join Query</h2>
            <p>A join query is a powerful mechanism in relational databases that enables the amalgamation of data from two or more tables. By utilizing the <b>JOIN</b> keyword, you can establish connections between tables using specified column relationships. This query type is particularly useful when information relevant to a query is distributed across multiple tables. The relationship between tables is defined by common columns, and the result of the join query is a combined dataset that includes columns from all participating tables.</p>
            <a href=''style={{color:"black" , cursor:"pointer"}}>CREATE NEW CLIENT</a>
            <p>----New Client Info will display at the end of the table----</p>
            <p>Here, We are Joining Cases and Clients Table to select ID, Name and Description of Clients</p>
        </section>
        <div className='joinContainer'>
            <h3>Check Name and Id of clients with Description of their Cases.</h3>
            <button onClick={handleSubmit}>Search</button>
        </div>
        <div className='tablee'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.ID}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.description}</td>
                            <td>
                                <Link to={`/ownerclient/user/${user.ID}/edit`} style={{marginRight: "10px" , color: "blue"}}>Edit</Link>
                                {/* <button onClick={() => deleteUser(user.ID)}>Delete</button> */}
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </>
  )
}
export default JoinQuery
