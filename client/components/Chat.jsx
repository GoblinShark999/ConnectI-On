import React from 'react'
import {Button} from '@mui/material';

export default function Chat(props) {
  return (
    <div  className = 'chat'>
      <Button className = 'chatButton' onClick={props.displayPage}> Codesmith Scratch Project Meetup </Button>
      <Button className = 'chatButton' onClick={props.displayPage}> Anime Expo 2022 </Button>



    </div>
  )
}
