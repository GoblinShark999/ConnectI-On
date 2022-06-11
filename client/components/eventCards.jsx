import React, {useEffect, useState, useContext} from 'react';
import {Box, Input, Button} from '@mui/material';

function eventCards () {

  const event = useContext(eventContext);
  return (
    <div>
      <p>{ event }</p>
    </div>
  )



}

export default eventCards;