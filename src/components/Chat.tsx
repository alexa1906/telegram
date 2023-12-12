// Chat.tsx

import React, { useState } from 'react';
import '../components/css/chat.css'; // Import the chat.css file for styling

interface Message {
  id: number;
  text: string;
  sender: string;
  // Add other properties as needed for each message
}

const Chat: React.FC = () => {
  // Sample message data (replace with your actual data)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello!', sender: 'User' },
    { id: 2, text: 'Hi there!', sender: 'Friend' },
    // Add more message objects as needed
  ]);

  const sendMessage = () => {
    // Add functionality to send a message (e.g., through an input field)
    // Update the messages state with the new message
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
