import React from 'react';
import Message from './Message';
import './Messagelist.css'
const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender}
          content={message.content}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default MessageList;