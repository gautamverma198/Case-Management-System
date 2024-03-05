import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Owner = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState('email');
    const { param } = useParams();

    useEffect(() => {
        setValue(param);
        getUsers(param);
    }, [param]);

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getUsers(value);
    };

    function getUsers(selectedAttribute) {
        console.log(selectedAttribute);
        axios.get(`http://localhost:80/clients/${selectedAttribute}`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const specificSearch = () => {
        console.log("hell");
        navigate('/specific');
    }

    const divide = () => {
        console.log("hell");
        navigate('/divide');
    }
    const nested = () => {
        console.log("hell");
        navigate('/nested');
    }
    const aggregation = () => {
        console.log("hell");
        navigate('/aggregation');
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/clients/clients/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    const keys = Object.keys(users)

    const moveToNewClient = ()=>{
        navigate('/newclient')
    }

    return (
        <>
            <section id="projection">
                <h2>Welcome to Projection Query</h2>
                <p>With the Projection Query, you have the power to select any column from the client table. Feel free to interact with the data by creating new clients using the form below and visualizing your results.</p>
                <a href='' onClick={moveToNewClient} style={{color:"black" , cursor:"pointer"}}>CREATE NEW CLIENT</a>                   
                <p>----New Client Info will display at the end of the table----</p>
            </section>
            <section id="projection">
                <p>Select an Attribute and Check your Result.</p>
                <p>-You can <b>Edit</b> a Client Info by Clicking on Edit Tab.</p>
                <p>-You can <b>Delete</b> a Client by clicking delete button.</p>
            </section>
            <div className="search-container" style={{marginBottom: '200px'}}>
                <form onSubmit={handleSubmit} id='formClient'>
                    <label htmlFor="attribute">Choose an Attribute:</label>
                    <select id="attribute" name="attribute" value={value} onChange={handleChange}>
                        <option value="Select">Select</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Number</option>
                        <option value="ID">ID</option>
                    </select>

                    <br />

                    <button type="submit">Submit</button>
                </form>
                <div>
                    {typeof users == 'string' ? (
                        <p>No Users</p>
                    ) : (
                        <div>
                            <h1>List Users</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{users.key}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, key) =>
                                        <tr key={key}>
                                            <td>{user.dat}</td>
                                            <td>
                                                <Link to={`user/${user.ID}/edit`} style={{ marginRight: "10px", color:"blue"}}>Edit</Link>
                                                <button onClick={() => deleteUser(user.ID)}>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    )}
                </div>
                <button style={{ margin: '10px' }} onClick={specificSearch}>SPECIFIC SEARCH</button>
                <button style={{ margin: '10px' }} onClick={divide}>JOINING DATA</button>
                <button style={{ margin: '10px' }} onClick={nested}>NESTED DATA</button>
                <button style={{ margin: '10px' }} onClick={aggregation}>AGGREGATION</button>
            </div>


        </>
    );
};

export default Owner;
