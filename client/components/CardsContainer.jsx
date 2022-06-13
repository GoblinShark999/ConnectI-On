import React, {useEffect, useState, useContext} from 'react';
import {Box, Input, Button} from '@mui/material';
import EventCard from './EventCard.jsx'

//props database dependent
function CardsContainer (props) {

  const eventCards = props.eventData.eventCardsContainer.map((eventCardData, i) => { return <EventCard key={i} eventCardData={eventCardData}/> })

  return (
    <div>
      {eventCards}
    </div>
  )



}

export default CardsContainer;