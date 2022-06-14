import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import '../stylesheets/styling.scss';
import ChatPage from './ChatPage.jsx';
import Login from './Login.jsx';
import App from './app.jsx'
import EventsPage from './EventsPage.jsx';

export default function Navbar() {
  return(
    <nav>
      <Router >
        <div className ='navbar'>
          <Link to="/:user" className='button'>
            <Button type="button">
              Search
            </Button></Link>
          <Link to="/user/chats" className='button'>
            <Button type="button">
              Chat
            </Button></Link>
          <Link to="/signOut" className='signOutButton'>
            <Button type="button">
              Sign out
            </Button>
          </Link>
        </div>


        <Routes>
          <Route path="/:user" element={<EventsPage/>}/>
          <Route path="/user/chats" element={<ChatPage/>}/>
          <Route path="/signOut" element={''}/>
        </Routes>
      </Router>

        <hr></hr>
      </nav>
  )
}
