import React, {useEffect, useState, useContext} from 'react';
import {Box, Input, Button} from '@mui/material';



function EventCard (props) {

  return (
    <div>
      <p>Event name: {props.eventName}</p>
      <p>Location: {props.location}</p>
      <Button value="Enter Chatroom" onClick>Enter Chatroom</Button>
    </div>
  )



}

export default EventCard;