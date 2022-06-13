import React from 'react'
import {Button} from '@mui/material';

export default function Chat(props) {
  return (
    <div  className = 'chat'>
      <Button className = 'chatButton' onClick={props.displayPage}> {props.chatName} </Button>
      <Button className = 'chatButton' onClick={props.displayPage}> {props.chatName} </Button>



    </div>
  )
}
