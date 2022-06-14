import React from 'react'
import Navbar from './Navbar.jsx';
import Chat from './Chat.jsx';
import DisplayChat from './DisplayChat.jsx';
import '../stylesheets/styling.scss';

export default function ChatPage(props) {
  return (
    <div className='chatContainer'>
      
      <Chat  chatName = 'chat 1'/>
      <DisplayChat />
    </div>
  )
}
