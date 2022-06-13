import React from 'react'
import Navbar from './Navbar.jsx';
import Chat from './Chat.jsx';
import DisplayChat from './DisplayChat.jsx';

export default function ChatPage(props) {
  return (
    <div>
      <Navbar />
      <Chat  chatName = 'chat 1' className = 'chat'/>
      <DisplayChat className = 'displayChat'/>
    </div>
  )
}
