import React, {useState} from 'react';
import MessageBox from './MessageBox.jsx';

export default function DisplayChat(props) {
  const [userMessage, setuserMessage] = useState('');

  function handleChange(e){
    setuserMessage(e.target.value);
    //console.log(value);
  }

  function handleSubmit(){

  }
  return (
    <div className = 'displayChat'>
      <div className='displayMessage'>       
        <MessageBox user = 'Aliya' message = 'Howdy 🤠'/>
        <MessageBox user = 'Anthony' message = '🥸'/>
        <MessageBox user = 'Erin' message = 'I love React.'/>
      </div>


      <div className='enterMessage'>
        <form>{/*//onSubmit={handleSubmit()}>*/}
          <label>
            <input type="text" value={userMessage} onChange={handleChange}/>
            <button value="add message" onClick={handleSubmit}> Enter Message</button>
          </label>
        </form>
      </div>
    </div>
  )
}
