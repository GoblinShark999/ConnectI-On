import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './HomePage.jsx';
import Button from '@mui/material/Button';
import '../stylesheets/styling.scss';
import ChatPage from './ChatPage.jsx';
import Login from './Login.jsx';
import App from './app.jsx'
import EventsPage from './EventsPage.jsx';

export default function Navbar(props) {
  return(
    <nav>
      <Router >
        <div className ='navbar'>
          <Link to="/login" className='signOutButton'>
            <Button type="button">
              Login
            </Button>
          </Link>
        </div>
        
        <Routes>
          <Route path="/login" element={<Login userData={props.userData} setUserData={props.setUserData} isNewUser={props.isNewUser} setIsNewUser={props.setIsNewUser}/>}/>
          <Route path="/eventPage" element={<EventsPage userData={props.userData} setUserData={props.setUserData} isNewUser={props.isNewUser} setIsNewUser={props.setIsNewUser}/>}/>
        </Routes>
      </Router>

        <hr></hr>
      </nav>
  )
}
