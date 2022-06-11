import React, {useEffect, useState, useContext} from 'react';
//import './stylesheets/styling.scss';
import {Box, Input, Button} from '@mui/material';
// import nav bar
import eventCards from './eventCards.jsx'

const event = {
  name: '',
  location: ''
}

// const eventContext = createContext(event);


function eventsPage (props) {
  const [eventData, setEventData] = useState ({
    name: '',
    location: '',
    eventCards: []
  })

  useEffect(() => {
    setEventData(eventData)
  }, [eventData])


  function handleChange(e){
    setEventData(() => ({...eventData, [e.target.name]: e.target.value}));
    console.log(eventData);
  }

  function handleSubmit(e){
    e.preventDefault();

    fetch(`/events/searchEvents?name=${eventData.name}&location=${eventData.location}`)
      .then((data) => data.json())
      .then((data) => {
        setEventData({eventCards: [eventCards, data]})
      })
      .catch((err) => {
        console.log('error!')
      })
    }

    // invoked when add events button is clicked
    // sends get req to backend to direct to add events page
      // when event is created, redirected back to add events page
    function handleAddEvent(e){
      fetch(`/events/addNewEvent?name=${eventData.name}&location=${eventData.location}`)
      .catch(err => console.log('error!'))
    }


  return (
    <div>
      {/* {nav bar} */}
      <h1>NavBar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Search:
          <input type="text" name = 'eventSearch' value = {eventData.name} onChange={handleChange}/>
          Location:
          <input type="text" name = 'eventLocation' value = {eventData.location} onChange={handleChange}/>
        </label>
        <Button type="submit" value="Submit" />
        <Button type="submit" value="Add Event" onClick={handleAddEvent}/>
      </form>
      <div id='eventCards'>
        {/* <eventContext.Provider value={event.name, event.location}>
          <eventCards />
        </eventContext.Provider> */}
      </div>
    </div>
  )

}

export default eventsPage;