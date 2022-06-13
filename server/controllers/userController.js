// const fetch = require('node-fetch');
// const { DllPlugin } = require('webpack');
const db = require('../models/dataModel.js')
const bcrypt = require('bcrypt');
const saltRounds = 11;

const userController = {};


userController.createUser = async (req,res,next) =>{
    console.log(req.body,'req body from user_test')

    const {username, password,location,session} = req.body
    
    console.log(username)
    let hashedPassword;
    
    const hashing = await bcrypt.hash(password, saltRounds).then((hash) => {
        hashedPassword = hash;
    })
    console.log('testing hashed, bcrypt password', hashedPassword);
    
try{
    const text = 'INSERT INTO user_test(username, password,location,session) VALUES($1,$2,$3,$4) RETURNING *';//${username},${password},${location},${session}
    //const text = `INSERT INTO user_test(username,password,location,session) VALUES('aliya','1234','Boise','1')`;
    const values = [username, hashedPassword, location, session];
    console.log("there")
    const result = await db.query(text,values);
    // console.log('testing result', result) 
    res.locals.result = result;
    return next();
}
catch(err){
    next({
        log: 'Express error handler caught error in userController.createUser',
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
}


userController.getUser = async (req,res,next) =>{
    console.log(req.body,'req body from user_test')

    const {username, password} = req.body;
    

    const text = `SELECT * FROM user_test WHERE username=$1`; //AND password=$2
    const values = [username] //need only username to find row then later compare req.body.password to hashed db password


    try{
        const userData = await db.query(text,values);
        const dbPassword = userData.rows[0].password;
        const match = await bcrypt.compare(password, dbPassword); 
        
        // console.log(userData)

        if (match) {
            res.locals.user = userData;
            return next();
        } else {
            return next({
                log: 'Express error handler caught error in userController.getUser',
                status: 401,
                message: { err: 'Incorrect username and/or password.' },
              })
        }
    }
    catch(err){
        next({
            log: 'Express error handler caught error in userController.getUser',
            status: 400,
            message: { err: 'An error occurred' },
          });
        }
    }

//update user -- what do we want to update?
userController.updateUser = async (req,res,next) => {
    //console.log('from get user_test')
    const {user} = req.params
    const {location } = req.body
    console.log(req.body)
    const text = `UPDATE user_test SET location=$2 WHERE username=$1`
    const values = [user,location]
    try{
        const updated = await db.query(text,values)
        res.locals.user = updated;
        return next();
    }
    catch(err){
        next({
            log: 'Express error handler caught error in starWarsController.addCharacter',
            status: '400',
            message: { err: 'An error occurred' },
          });
    }
    
}



// CREATE TABLE user (
//     _id     SERIAL PRIMARY KEY,
//     user         VARCHAR,
//     password      VARCHAR,
//     location     VARCHAR,
//     session     VARCHAR,
//     chat_id     INT,     
//   );

// CREATE TABLE event_data (
//     _id     SERIAL PRIMARY KEY,
//     name         VARCHAR,
//     location     VARCHAR,
//     description  VARCHAR,
//     date         DATE,
//     date_created DATE, 
//     created_by   INT,
//     chat_id     INT
//          
//   );

// CREATE TABLE chat (
//     _id     SERIAL PRIMARY KEY,
//     user         VARCHAR,
//     message      VARCHAR,
//     date         DATE,
//     event_id      INT,
// 
//   );

//Join tables
// CREATE TABLE user_event
//(
    //     _id     SERIAL PRIMARY KEY,
    //     user_id         VARCHAR,
    //     event_id     VARCHAR,
    //      chat_id     VARCHAR,
    //   );

// CREATE TABLE user_chat
//(
    //     _id     SERIAL PRIMARY KEY,
    //     user_id         VARCHAR,
    //     chat_id     VARCHAR,
    //   );
    
    //someUser, 1, 2 (chat_id points to CaliforniaEvent)
    
    //_id user2, 1
    //_id user2, 2

    //user table
    // _id user [1,2,3]


// _id(user), user, pw, location, chat_id(fkey)
// _id(event), name, location, description, date, created_by, chat_id(fkey)
// _id(chat), user, message, date, event_id(fkey)

//create event
//post request --> insert event -> insert chat 

//create user
//post request --> insert user

//user joins event
//user needs event_id & chat_id; insert joins table 
module.exports = userController;