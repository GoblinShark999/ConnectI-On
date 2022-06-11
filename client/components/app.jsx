import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';
import {Box, Input, Button} from '@mui/material';
import Navbar from './Navbar.jsx';



function App (props) {
  const [userData, setUserData] = useState({
    username: '', 
    password: '', 
    location: ''
  }); 

  useEffect(() => {
     setUserData(userData)
  }, [userData])
  
  function handleSubmit(e){
    
  }

  function handleChange(e){
    setUserData(() => ({...userData, [e.target.name]: e.target.value}));
    console.log(userData);
  }
  let value = '';

  return (
    
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name = 'username' value = {userData.username} onChange={handleChange}/>
          Password:
          <input type="text" name = 'password' value = {userData.password} onChange={handleChange}/>
          Location:
          <input type="text" name = 'location' value = {userData.location} onChange={handleChange}/>
        </label>
        <Button type="submit" value="Log in" />
      </form>
    </div>

  )
}
export default App; 
// <button onClick={(event) => setUserData({...userData, [event.target.name]: event.target.value})}></button>

// const [value, setValue] = React.useState('');
  
// function handleChange(e){
//   setValue(e.target.value);
//   //console.log(value);
// }

// function handleSubmit(e){
//   props.add_market(value);
//   setValue('');
//   //console.log(props);
//   //this.setState({value: event.target.value});

//   e.preventDefault();
// }

/* <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value = {value} onChange={handleChange}/>
        </label>
        <input type="submit" value="Add Market" />
      </form> */


// const [allValues, setAllValues] = useState({
//   mobile: '',
//   username: '',
//   email: '',
//   password: '',
//   confirmPassword: ''
// });