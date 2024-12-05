import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../service/service';

const Home = () => {
    const navigator = useNavigate();
    const handleLogout = () => {
        logout();
        navigator("/");
      };
  return (
    <div className='Home'>
        <button onClick={handleLogout}>Logout</button>
        <h1>Welcome</h1>
    </div>
  )
}

export default Home