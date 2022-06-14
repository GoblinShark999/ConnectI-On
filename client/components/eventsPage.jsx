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
  function handleEventSearchInput(e, props){
    props.setEventData(() => ({...props.eventData, [e.target.name]: e.target.value}));
  }

  // get req to back end with event name or new location or both
  // returns event data objects to populate page
  function handleSearchSubmit(e, props){
    e.preventDefault();
    console.log(props)

    console.log(props.eventData)

    console.log(props.eventData.searchEventName)
    fetch(`/events/searchEvents?name=${props.eventData.searchEventName}&location=${props.eventData.searchEventLocation}`)
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
          <input type="text" name="searchEventName" value={props.eventData.searchEventName} onChange={(e) => handleEventSearchInput(e, props)}/>
          Location:
          <input type="text" name="searchEventLocation" value={props.eventData.searchEventLocation} onChange={(e) => handleEventSearchInput(e, props)}/>
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