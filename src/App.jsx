import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const age = parseInt(form.age.value);
    const user = {
      name,
      age
    };
    fetch('http://localhost:8000/users', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then( res => res.json())
    .then( data => {
      const newTotalUsers = [...users, data];
      setUsers(newTotalUsers)
      form.reset()
    })
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
        users.map( user => <h3 key={user?.id}>{user?.id} : {user?.name}, age: {user?.age}</h3>)
      }
    </>
  );
};

export default App; 