import React, { useState } from "react";
import "../components/css/chatList.scss"; 
import menuIcon from "/icons8-menu-50.png";
import searchIcon from "/icons8-search-24.png";
import pen from "/icons8-pen-67.png";

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  profilePic: string;
  // Add other properties as needed for each chat
}

const ChatList: React.FC = () => {
  // Sample chat data
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const chats: Chat[] = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hello there!",
      profilePic: "/profilePic.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Hey!",
      profilePic: "/pic2.png",
    },
  ];
  
  const handleChatClick = (chatId: number) => {
    setSelectedChat(chatId === selectedChat ? null : chatId);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Implement search functionality
    const searchText = event.target.value;
  };
  const handleMenuClick = () => {
    // Handle menu icon click
  };

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <img src={menuIcon} alt="Menu" className="menuIcon" onClick={handleMenuClick} />
        <div className="search-input">
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
      </div>
      <h2>Chat List</h2>
      {chats.map((chat) => (
        <div
          className={`chat-item ${selectedChat === chat.id ? "selected" : ""}`}
          key={chat.id}
          onClick={() => handleChatClick(chat.id)}
        >
          <img src={chat.profilePic} alt="Profile" className="profile-pic" />
          <div className="chat-details">
            <h3 className="chat-name">{chat.name}</h3>
            <p className="last-message">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      <div className="chat-list-bottom">
        <button className="btn1">UPDATE</button>
        <button className="btn2">
          <img src={pen} alt="pen" />
        </button>
      </div>
    </div>
  );
};

export default ChatList;
