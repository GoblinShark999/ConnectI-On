import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ErrorPage from './ErrorPage.jsx';
import HomePage from './HomePage.jsx';
import Button from '@mui/material/Button';
import '../stylesheets/styling.scss';

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
          <Route path="/" element={<HomePage/>}/>
          <Route path="/:user" element={''}/>
          <Route path="/user/chats" element={''}/>
          <Route path="/signOut" element={''}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>

        <hr></hr>
      </nav>
  )
}
