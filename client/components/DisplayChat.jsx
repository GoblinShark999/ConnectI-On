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
        <MessageBox user = 'userasdasdasd1' message = 'hell11111o 1'/>
        <MessageBox user = 'user2' message = 'hello 22222222222asdsadasd22222222222'/>
        <MessageBox user = 'user3' message = 'h222ello 3'/>
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
