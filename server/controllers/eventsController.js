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
    const created_by = user;
    //event creater
    const {name, location, description, date, date_created} = req.body
    const text = 'INSERT INTO event_data_test(name, location, description, date, date_created, created_by) VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
    const values = [name, location, description, date, date_created, created_by];
    //chat creater??
    //const text2 = 'INSERT INTO chat_test('

    //joins creater
    const text3 = 'SELECT _id.user_test, _id.event_test INTO user_event_test FROM user_test, event_test WHERE '
try{
    await db.query(text,values)
   //should also automatically add this to user's chat queue
   //needs to add to join table
   await db.query(text2),values2
   await db.query(text3)
      return next();
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
