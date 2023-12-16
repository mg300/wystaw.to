import React, { useState } from 'react';
import UserPanel from './Userpanel';
import MessageList from './Messagelist';

// Symulacja danych użytkowników
const usersData = [
  { id: 1, name: 'Jan Kowalski' },
  { id: 2, name: 'Anna Nowak' },
  // Możesz dodać więcej użytkowników według potrzeb
];

// Symulacja danych wiadomości dla każdego użytkownika
const initialMessages = {
  1: [
    { sender: 'Jan Kowalski', content: 'Cześć!', timestamp: '12:01 PM' },
    { sender: 'Ja', content: 'Hej, co słychać?', timestamp: '12:05 PM' },
  ],
  2: [
    { sender: 'Anna Nowak', content: 'Cześć Jan!', timestamp: '12:02 PM' },
    { sender: 'Jan Kowalski', content: 'Dobrze, a u Ciebie?', timestamp: '12:06 PM' },
  ],
  // Wiadomości dla innych użytkowników
};

const Messagebox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectUser = (userId) => {
    setSelectedUser(userId);
    setMessages(initialMessages[userId] || []);
  };

  return (
    <div className="app">
      <UserPanel users={usersData} onSelectUser={handleSelectUser} />
      <div className="conversation-area">
        {selectedUser ? (
          <MessageList messages={messages} />
        ) : (
          <p>Wybierz użytkownika, aby zobaczyć konwersację.</p>
        )}
      </div>
    </div>
  );
};

export default Messagebox
