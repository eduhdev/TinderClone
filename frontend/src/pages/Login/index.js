import React, {useState} from 'react';
import "./Login.css";

import api from '../../services/api';

import logo from '../../assets/logo.svg';

function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const {data: user} = await api.post('/devs', {username});
    const {_id} = user;
    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} >
        <img src={logo} alt="Tindev Logo" />
        <input 
          placeholder="Your GitHub username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default Login;