import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';
<<<<<<< HEAD
import {Box, Input, Button} from '@mui/material';
import EventsPage from './EventsPage.jsx'
=======

>>>>>>> dev

function App(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        location: ''
    });

    const [eventData, setEventData] = useState ({
        searchEventName: '',
        searchEventLocation: '',
        eventCardsContainer: []
    });



    const [isNewUser, setIsNewUser] = useState(false);
    return (
        <div>
            <Login userData={userData} setUserData={setUserData} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>
        </div>

    )

}
export default App;



