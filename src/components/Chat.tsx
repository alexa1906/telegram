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
  const [message, setMessage] = useState<string>(''); // State to track the user's typed message

  const sendMessage = (newMessage: string) => {
    const token = localStorage.getItem('jwtToken');
    const userName = token ? 'User' : 'Friend'; // Assuming if token exists, the sender is 'User'

    const newMessages = [
      ...messages,
      { id: messages.length + 1, text: newMessage, sender: userName },
    ];
    setMessages(newMessages);
    setMessage(''); // Clear the message input after sending
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
        <input
          type="text"
          placeholder="Type a message..."
          value={message} // Bind the input value to the message state
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => sendMessage(message)}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
