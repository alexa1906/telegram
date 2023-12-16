import React, { useState } from 'react';
import '../components/css/chat.css';

interface Message {
  id: number;
  text: string;
  sender: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello!', sender: 'User' },
    { id: 2, text: 'Hi there!', sender: 'Friend' },
  ]);

  const sendMessage = () => {
    // Add functionality to send a message 
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'User' ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <span>{message.sender}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type a message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
