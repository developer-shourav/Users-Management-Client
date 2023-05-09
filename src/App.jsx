import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name;
    const age = form.age.value;
    const user = {
      name,
      age
    }
    console.log(user);
  }

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then( res => res.json())
    .then( data => setUsers(data))
  }, [])
  return (
    <>
      <h1>User Management System</h1>
      <h2>Total Users:{users?.length}</h2>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Your Name' id="" />
        <br />
        <input type="number" name="age" placeholder='Your Age' id="" />
        <br />
        <input type="submit" value="Add User" />

      </form>


      



      {
        users.map( user => <h3 key={user?.id}>{user.id} : {user.name}</h3>)
      }
    </>
  );
};

export default App; 