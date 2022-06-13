import React, {useEffect, useState} from 'react';
//import './stylesheets/styling.scss';
import {Box, Input, Button} from '@mui/material';
import Navbar from './Navbar.jsx'
import CardsContainer from './CardsContainer.jsx'


function EventsPage (props) {
  // on initial render only, set event cards to all events in user default location
  useEffect(() => {
    fetch(`/events/?username=${props.userData.username}&location=${props.userData.location}`)
    .then((data) => data.json())
    .then((data) => {
      props.setEventData({eventCardsContainer: [...data]})
    })
    .catch((err) => {
      console.log('error!')
    })
  }, []);

  // handles search inputs
  function handleEventSearchInput(e){
    props.setEventData(() => ({...props.eventData, [e.target.name]: e.target.value}));
  }

  // get req to back end with event name or new location or both
  // returns event data objects to populate page
  function handleSearchSubmit(e){
    e.preventDefault();

    fetch(`/events/searchEvents?name=${props.eventData.name}&location=${props.eventData.location}`)
      .then((data) => data.json())
      .then((data) => {
        props.setEventData({eventCardsContainer: [...data]})
      })
      .catch((err) => {
        console.log('error!')
      })
    }


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form onSubmit={handleSearchSubmit}>
        <label>
          Event Search:
          <input type="text" name="name" value={props.eventData.searchEventName} onChange={handleEventSearchInput}/>
          Location:
          <input type="text" name="location" value={props.eventData.searchEventLocation} onChange={handleEventSearchInput}/>
        </label>
        <div className='testButtonColor'>
        <Button className="eventSearchButton" type="submit" value="Submit" >Submit</Button>
        {/* <Button className="eventAddButton" type="submit" value="Add Event" onClick={handleAddEvent}>Add Event</Button> */}
        </div>
      </form>
      <div id='eventCards'>
        <CardsContainter eventCardContainer={eventCardsContainer}/>
      </div>
    </div>
  )

}

export default EventsPage;