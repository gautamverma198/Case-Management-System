import axios from 'axios';
import React, { useState , useEffect } from 'react'

const LawyersList = () => {
  const [users ,setUsers] = useState([]);
  const [disable ,setDisable] = useState(false);


  useEffect(() => {
    axios.get(`http://localhost:80/clients/legalprofessional/get`)
      .then(function (response) {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const contact = (email) => {
    alert("Email has been sent to the Lawyer\nYou Will hear back soon.\nThank you for using this application");
    setDisable(prevState => ({
      ...prevState,
      [email]: true
    }));
  };


  return (
    <>
      <div className='tablee'>
        <h1>LAWYERS LIST</h1>
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
                <button
                    disabled={disable[user.email]}
                    onClick={() => contact(user.email)}
                    id='lawbtn'
                  >
                    CONTACT
                  </button>
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </>
  )
}
export default LawyersList
