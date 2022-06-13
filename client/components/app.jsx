import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';


function App(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        location: ''
    });
    const [isNewUser, setIsNewUser] = useState(false);
    return (
        <div>
            <Login userData={userData} setUserData={setUserData} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>
        </div>

    )

}
export default App;



