// const fetch = require('node-fetch');
// const { DllPlugin } = require('webpack');
const db = require('../models/dataModel.js')

const eventsController = {};
// CREATE TABLE event_data_test (
//     _id     SERIAL PRIMARY KEY,
//     name         VARCHAR,
//     location     VARCHAR,
//     description  VARCHAR,
//     date         DATE,
//     date_created DATE, 
//     created_by   INT,
//     chat_id     INT
         
//   );
// CREATE TABLE chat_test (
//     _id     SERIAL PRIMARY KEY,
//     user         VARCHAR,
//     message      VARCHAR,
//     date         DATE,
//     event_id      INT
//   );
//creating event needs to also create chat and add entry to joins table
///events/addNewEvent?name=${eventData.name}&location=${eventData.location}`
eventsController.createEvent = async (req,res,next) =>{
    //console.log(req.body,'req body from event_test')
    const {user} = req.params
  
    const text1 = `SELECT _id FROM user_test WHERE username=$1`
    const values1 =[user]

    const {name, location, description, date, date_created} = req.body
    const text = 'INSERT INTO event_data_test(name, location, description, date, date_created, created_by) VALUES($1,$2,$3,$4,$5,$6) RETURNING _id, created_by';
   
    
    try{
    const user_id = await db.query(text1,values1)
    const created_by = user_id.rows[0]._id
    const values = [name, location, description, date, date_created, created_by];

    const ids = await db.query(text,values);
    console.log(ids)
    res.locals.ids = ids.rows[0];
      return next();
}

catch(err){ 
    next({
        log: 'Express error handler caught error in eventsController.createEvent',
        status: 400,
        message: { err: 'An error occurred' },
      });
}
}


eventsController.addToJoin = async (req,res,next) => {
    const {_id, created_by} = res.locals.ids;
    const event_id = _id;
    const user_id = created_by
    
    //const text3 = 'SELECT _id.user_test, _id.event_test INTO user_event_test FROM user_test, event_test WHERE '
    try{
        const text2 = `INSERT INTO user_event_test(user_id,event_id) VALUES($1,$2) RETURNING *`
        const text = `INSERT INTO user_event_test(user_id,event_id) VALUES(${user_id},${event_id}) RETURNING *`
        values = [user_id, event_id];
        console.log(values)
        const joint = await db.query(text2,values)
        res.locals.joint = joint;
        return next()
    }
    catch(err){
        next({
            log: 'Express error handler caught error in eventsController.adToJoin',
            status: 400,
            message: { err: 'An error occurred' },
          });
    }

}
///events/searchEvents?name=${eventData.name}&location=${eventData.location}`
//search events by keywords/title
eventsController.getEventsInitial = async (req,res,next) =>{
    
    const {user} = req.params
  
    const text = `SELECT location FROM user_test WHERE username=$1`
    const values =[user]
    //const {name, location, } = req.body;
    
    
    try{
        const userLoc = await db.query(text,values);
        const location = userLoc.rows[0].location
        console.log((location),"location")
        const text2 = `SELECT * FROM event_data_test WHERE location=$1`;
        const values2 = [location]
        const events = await db.query(text2,values2);
        res.locals.events= events;
        return next();
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
          });
        }
    }

eventsController.getEventsSearch = async (req,res,next) =>{
    
        const {name, location} = req.body
        let eventName = name;
        let eventLoc =location;
        //const {name, location, } = req.body;
        if(!name){
            eventName = ''
        }
        if(!location){
            eventLoc=''
        }
        console.log("event",name,"loc",location,"eventName",eventName,"eventLoc",eventLoc)
        const text = `SELECT * FROM "public"."event_data_test" WHERE name=$1 OR location=$2`
        const values =[eventName, eventLoc];
        try{
            const searchResult = await db.query(text,values);
            //const location = userLoc.rows[0].location
            console.log(searchResult.rows)
            res.locals.events= searchResult;
            return next();
        }
        catch(err){
            next({
                log: 'Express error handler caught error in userController.getUser',
                status: 400,
                message: { err: 'An error occurred' },
              });
            }
        }

//update event info
//add event to user/joint
eventsController.addUserToEvent = async(req,res,next) =>{
    const {user} = req.params;
    //event name from body?
    const {name} = req.body;
    const text1 = `SELECT _id FROM user_test WHERE username=$1`
    const values1 =[user];
    const text2 = `SELECT _id FROM event_data_test WHERE name=$1`
    const values2 =[name];
    try{
        const result1 = await db.query(text1,values1);
        const user_id = result1.rows[0]._id;
        const result2 = await db.query(text2,values2);
        const event_id = result2.rows[0]._id;

        const text3 = 'INSERT INTO user_event_test(user_id,event_id) VALUES($1,$2) RETURNING *'
        const values3 = [user_id,event_id];
        await db.query(text3,values3);

        return next()
        
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
          });
    }


}

//get list of chats
// eventsController.getChatList = async (req,res,next) => {
//     const { user } = req.params;

    // CREATE TABLE user_event_test
// (
//         _id     SERIAL PRIMARY KEY,
//         user_id         VARCHAR,
//         event_id     VARCHAR,
//          chat_id     VARCHAR
//       );

    // CREATE TABLE user_test (
//     _id     SERIAL PRIMARY KEY,
//     username      VARCHAR,
//     password      VARCHAR,
//     location     VARCHAR,
//     session     VARCHAR,
//     chat_id     INT     
//   );
//SELECT u.username,CAST(u._id AS INT), CAST(e.user_id AS INT) FROM user_test u INNER JOIN user_event_test e ON CAST(e.user_id AS INT)=u._id 
//  //   const text = "SELECT INNER JOIN user_event_test INNER JOIN user_test"
//     const values = [user]
    
//     try{
//         const results = await db.query(text, values)
//         console.log(results);
//         //join table query
//         //use a for loop and iterate through rows to generate chatList
//     }
//     catch(err){
//         next({
//             log: 'Express error handler caught error in userController.getUser',
//             status: 400,
//             message: { err: 'An error occurred' },
//           });
//     }
// }


//get chat messages
eventsController.getChatLog = async (req,res,next) =>{
    const { user, events } = req.params;

    const text = 'SELECT * FROM chats WHERE event=$1'
    const value =[events];

    try{
        await db.query(text,value)

        return next()
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
          });
    }

}


//post chat messages
eventsController.postMessage = async (req,res,next) =>{
    const { message } = req.body;
    const { user, events } = req.params;
    const date = + new Date();

    const text = 'INSERT INTO chat_test(user,message,date,events) VALUES($1,$2,$3,$4)'
    const values =[user,message,date,events];

    try{
        await db.query(text,values)
        return next()
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
        });
    }
    
}

catch(err){ 
    next({
        log: 'Express error handler caught error in starWarsController.addCharacter',
        status: 400,
        message: { err: 'An error occurred' },
      });
}
}
///events/searchEvents?name=${eventData.name}&location=${eventData.location}`
//search events by keywords/title
eventsController.getEvents = async (req,res,next) =>{
    console.log(req.body,'req body from user_test')

    const {name, location, } = req.body;
    const user = username;
    const pass = password;
    console.log(username,password)
    const text = `SELECT * FROM user_test WHERE username=$1 AND password=$2`;
    const values = [username, password]
    try{
        const userData = await db.query(text,values);
        //console.log(userData)
        res.locals.user = userData;
        return next();
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
          });
        }
    }

//update event info
//add event to chat list



module.exports = eventsController;



module.exports = eventsController;
