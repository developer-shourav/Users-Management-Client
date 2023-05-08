import React, { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
    .then( res => res.json())
    .then( data => setUsers(data))
  }, [])
  console.log(users);
  return (
    <>
      <h1>User Management System</h1>
    </>
  );
};

export default App;