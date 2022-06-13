import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';
import LoginNavbar from './LoginNavbar.jsx';
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';

function App(props) {
    const [userData, setUserData] = useState({
      
        username: '',
        password: '',
        location: ''
    });
    const [isNewUser, setIsNewUser] = useState(false);
    return (
        <div>
            <Navbar></Navbar>
            {//<LoginNavbar userData={userData} setUserData={setUserData} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>}
            }{console.log(userData, isNewUser)}
        </div>
    )
}

export default App;