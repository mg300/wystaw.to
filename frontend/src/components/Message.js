import React from 'react';
import './Message.css'
const Message = ({ sender, content, timestamp }) => {
  return (
    <div className="message">
      <p><strong>{sender}</strong>: {content}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default Message;
