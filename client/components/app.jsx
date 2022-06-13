import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';
import {Box, Input, Button} from '@mui/material';


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

function handleNewUserInput(e, userData, setUserData) {
    setUserData(() => ({...userData, [e.target.name]: e.target.value}));
}

const Login = (props) => {
    if (!props.isNewUser) {
        return (
            <form>{/*//onSubmit={handleSubmit()}>*/}
                <label>
                    Username:
                    <input type="text" name='username' value={props.userData.username} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
                    Password:
                    <input type="text" name='password' value={props.userData.password} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
                    <Button style={{backgroundColor: "red"}} type="submit" value="Log in" onClick={() => {
                    }}/>
                    <Button style={{backgroundColor: "blue"}} type="submit" value="Sign Up" onClick={() => {
                        props.setIsNewUser(!props.isNewUser);
                    }}/>
                </label>
            </form>
        )
    } else {
        return (<Box>
                Username:
                <input type="text" name='username' value={props.userData.username} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                Password:
                <input type="text" name='password' value={props.userData.password} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                Location:
                <input type="text" name='location' value={props.userData.location} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                <Button style={{backgroundColor: "green"}} type="submit" value="Signed in" onClick={() => {
                }}/>
            </Box>
        )
    }
}
