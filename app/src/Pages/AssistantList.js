import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const AssistantList = () => {
    const [users, setUsers] = useState([]);
    const getAssistants = ()=>{
        axios.get(`http://localhost:80/clients/assistants/get`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
            console.log(users);
        });   
    }
  return (
    <>
        <div className='tablee'>
            <h1>ASSISTANTS LIST</h1>
            <button onClick={getAssistants}>SEARCH ASSISTANTS</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.ID}</td>
                            <td>{user.name}</td>
                            <td>{user.city}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>Contact</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    </>
  )
}
export default AssistantList
