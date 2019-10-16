import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import "./Main.css";

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import dislike from '../../assets/dislike.svg';
import like from '../../assets/like.svg';

export default function Main({match}) {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const {data} = await api.get('/devs', {
        headers: {user: match.params.id}
      });

      setUsers(data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev logo"/>
      </Link>
      
        { users.length > 0 ? (
          <ul>
            {users.map(item => 
              <li key={item._id}>
                <img src={item.avatar} alt={item.user} />
                <footer>
                  <strong>{item.name}</strong>
                  <p>{item.bio}</p>
                </footer>
            
                <div className="buttons">
                  <button type="button" onClick={() => handleDislike(item._id)}>
                    <img src={dislike} alt="Dislike"/>
                  </button>
                  <button type="button" onClick={() => handleLike(item._id)}>
                    <img src={like} alt="Dislike"/>
                  </button>
                </div>
              </li>
            )}
          </ul>
        ) : (
          <div className="empty">No more people to crush :(</div>
        )}
    </div>
  );
}
