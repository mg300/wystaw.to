import React from 'react';
import 'Conwersationlist.css'
const ConversationList = () => {
  // Tutaj możemy symulować listę konwersacji - załóżmy, że jest to tablica obiektów z danymi konwersacji
  const conversations = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello there!', timestamp: '10:30 AM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?', timestamp: '11:45 AM' },
    // ... inne konwersacje
  ];

  return (
    <div className="conversation-list">
      <h2>Conversation List</h2>
      <ul>
        {conversations.map(conversation => (
          <li key={conversation.id}>
            <div className="conversation-item">
              <div className="user-avatar"></div>
              <div className="conversation-info">
                <h3>{conversation.name}</h3>
                <p>{conversation.lastMessage}</p>
                <span>{conversation.timestamp}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
