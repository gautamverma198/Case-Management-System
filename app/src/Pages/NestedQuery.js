import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const NestedQuery = () => {
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
        axios.get(`http://localhost:80/clients/nested/${selectedAttribute}`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <>
            <section id="projection">
                <h2>Welcome to Nested Query</h2>
                <p>A nested query, or subquery, is a powerful construct in database queries that involves embedding one query within another. This technique enables the use of the results of one query as a condition or value in another query. The subquery is enclosed within parentheses and is executed to produce a result set, which is then utilized by the outer query.</p>
                <p>Nested queries are employed for various purposes, such as filtering results based on dynamic criteria, performing calculations using intermediate results, or obtaining data from related tables. The subquery can be used in different parts of the main query, such as the SELECT clause, FROM clause, WHERE clause, or as part of an expression.</p>
                <a href=''style={{color:"black" , cursor:"pointer"}}>CREATE NEW CLIENT</a>
                <p>----New Client Info will display at the end of the table----</p>
                <p>Specify the case type and Check your Result.</p>
            </section>
            <form onSubmit={handleSubmit} id='formClient'>
                <label htmlFor="type">Choose an Attribute:</label>
                <select id="type" name="type" value={value} onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="Criminal">Criminal</option>
                    <option value="Civil">Civil</option>
                    <option value="Family">Family</option>
                    <option value="Bussiness">Bussiness</option>
                    <option value="Immigration">Immigration</option>
                </select>

                <br />

                <button type="submit">Submit</button>
            </form>

            
            <div className='tablee'>
                <h3>CLIENTS LIST</h3>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) =>
                            <tr key={key}>
                                <td>{user.ID}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/ownerclient/user/${user.ID}/edit`} style={{ marginRight: "10px", color: "blue" }}>Edit</Link>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}
export default NestedQuery
