import React from 'react';
import ChatList from '../components/ChatList';
import Chat from '../components/Chat';
import '../pages/css/mainPage.css'; 

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="chat-list-container">
        <ChatList />
      </div>
      <div className="chat-container">
        <Chat />
      </div>
    </div>
  );
};

export default MainPage;