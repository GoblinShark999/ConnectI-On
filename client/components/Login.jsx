import {Box, Input, Button} from '@mui/material';
import React, {useState} from 'react';
import {Link, Navigate } from 'react-router-dom'

const Login = (props) => {
    if (!props.isNewUser) {
        return (
          <Box>
              Username:
              <input type="text" name='username' value={props.userData.username} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
              Password:
              <input type="text" name='password' value={props.userData.password} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
              <Button style={{backgroundColor: "red"}} type="submit" value="Log in" onClick={(event) => {login(event, props.userData, props.setUserData, props.isNewUser, props.setIsNewUser)}}> login </Button>
              <Button style={{backgroundColor: "blue"}} type="submit" value="Sign Up" onClick={() => {props.setIsNewUser(!props.isNewUser);}}> Sign up </Button>
          </Box>
        )
    } else {
        return (<Box>
                Username:
                <input type="text" name='username' value={props.userData.username} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                Password:
                <input type="text" name='password' value={props.userData.password} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                Location:
                <input type="text" name='location' value={props.userData.location} onChange={(e) => {handleNewUserInput(e, props.userData, props.setUserData)}}/>
                <Button style={{backgroundColor: "blue"}} type="submit" value={props.userData} onClick={(event) => signUp(event, props.userData, props.isNewUser, props.setIsNewUser)}> Sign up </Button>
            </Box>
        )
    }
}

function handleNewUserInput(e, userData, setUserData) {
    setUserData(() => ({...userData, [e.target.name]: e.target.value}));
}
//{ username: 'zxc', password: 'a', location: '1' } 

function login(e, userData, setUserData, isNewUser, setIsNewUser){
  fetch('/login', { //http://localhost:3000/
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
        username: userData.username,
        password: userData.password,
    })
  })
  .then(res => res.json())
  .then(response => {
    console.log(response);
    if(response){
      () => <Navigate to="/eventPage" userData={userData} setUserData={setUserData} isNewUser={isNewUser} setIsNewUser={setIsNewUser}/>
    }
  })
}

// import { useNavigate } from "react-router-dom";

// function SignupForm() {
//   let navigate = useNavigate();

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await submitForm(event.target);
//     navigate("../success", { replace: true });
//   }

//   return <form onSubmit={handleSubmit}>{/* ... */}</form>;
// }

function signUp(e, props, isNewUser, setIsNewUser){
  console.log(props)
  fetch('/signup', { //http://localhost:3000/
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    },
    body: JSON.stringify({
        username: props.username,
        password: props.password,
        location: props.location
    })
  })
  .then(res => res.json())
  .then(response => {
    console.log(response);
    if(response === 'User created'){
      setIsNewUser(!isNewUser);
    }
  })
}





export default Login;
