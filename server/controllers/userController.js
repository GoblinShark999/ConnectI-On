// const fetch = require('node-fetch');
// const { DllPlugin } = require('webpack');
const db = require('../models/dataModel.js')

const userController = {};

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