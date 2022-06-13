const AddEventsPage = (props) => {
    const [newEvent, setNewEvent] = useState({
            eventName: '',
            eventLocation: '',
            eventDescription: '',
            eventDate: '',
        });

        return (
            <form>{/*//onSubmit={handleSubmit()}>*/}
                <label>
                    Event Name:
                    <input type="text" name='name' value={props.userData.username} onChange={(event) => {setNewEvent({})}}/>
                    Location Name:
                    <input type="text" name='location' value={props.userData.password} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
                    Description:
                    <input type="text" name='description' value={props.userData.password} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
                    Date:
                    <input type="text" name='date' value={props.userData.password} onChange={(event) => {handleNewUserInput(event, props.userData, props.setUserData)}}/>
                    <Button style={{backgroundColor: "red"}} type="submit" value="Create Event" onClick={(event) => {
                    addEvent(event)
                    }}/>
                </label>
            </form>
        )
    }

    // const addEvent = (props) => {
    //     fetch('http://localhost:8080/events', {
    //         method: 'Post',
    //         headers: {
    //             'Content-Type':
    //             application/json'
    //         }
    //     body: JSON.stringify({
    //         "name": props.event.name;
    //         "location": props.event.location;
    //         "description": props.event.description;
    //         "date:" props.event.date;
    //     })
    // })}
    //}
