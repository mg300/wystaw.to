import React from 'react';
import './Userpanel.css'; 
const UserPanel = ({ users, onSelectUser }) => {
  return (
    <div className="user-panel">
      <h2>Użytkownicy</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} onClick={() => onSelectUser(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPanel;
