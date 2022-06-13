import React from 'react'
import {Button} from '@mui/material';

export default function Chat(props) {
  return (
    <div>
      <Button onClick={props.displayPage}> {props.chatName} </Button>
    </div>
  )
}
