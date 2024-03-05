import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SpecificSearch = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState('sdfdsf');

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setFormData(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUsers(value);
  };

  const getUsers = (value) => {
    axios.get(`http://localhost:80/clients/clients/specific/${value}/${formData}`)
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data)
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:80/clients/clients/${id}`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }
  const [value, setValue] = useState('email');
  const { param } = useParams();

  useEffect(() => {
    setValue(param);
    getUsers(param);
  }, [param]);
  let ass = "";
  
  const handleChangeSelect = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    ass = value;
  };

  const handleSubmitSelect = (event) => {
    event.preventDefault();
    const e = document.getElementById('editForm');
    e.style.display = "block";
  };
  const moveToNewClient = ()=>{
    navigate('/newclient')
}

  return (
    <>
        <section id="projection">
          <h2>Welcome to Selection Query</h2>
          <p>A selection query enables you to extract targeted data from a table by defining specific conditions that the rows must satisfy. By employing the <b>SELECT</b> statement, you can tailor your retrieval to include only those records that meet predefined criteria. These criteria are specified in the <b>WHERE</b> clause of the query, allowing you to filter rows based on comparisons, ranges, or other logical conditions. The result is a focused subset of the table's data, providing valuable insights and facilitating more precise analysis by excluding irrelevant information.</p>
          <a href=''onClick={moveToNewClient} style={{color:"black" , cursor:"pointer"}}>CREATE NEW CLIENT</a>
          <p>----New Client Info will display at the end of the table----</p>
        </section>
      <form onSubmit={handleSubmitSelect} id='formClient'>
          <label htmlFor="type">Choose an Attribute:</label>
          <select id="type" name="type" value={value} onChange={handleChangeSelect}>
            <option value="Select">Select</option>
            <option value="name">Name</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>

          <br />

          <button type="submit">Submit</button>
      </form>



      <div className="edit-form" id='editForm' style={{ display: 'none' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData} onChange={handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className='tablee'>
        <h1>CLIENTS LIST</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Value</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}
export default SpecificSearch
