const jwt = require('jsonwebtoken');

const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController.js');
const userController = require('../controllers/userController');
const userAuthController = require('../controllers/userAuthController')

//main
router.post('/signup', userController.createUser, (req,res)=>{
    res.status(200).json("User created")
})


router.get('/login', userController.getUser, (req,res) =>{
    res.status(200).json(res.locals.user)
})

//
 router.post('/update'), userController.updateUser, (req, res) => {
    res.status(200).json(res.locals.user)
}


//events
///events/searchEvents?name=${eventData.name}&location=${eventData.location}`
//, eventsController.addToJoin
router.post('/:user/create', eventsController.createEvent, eventsController.addToJoin, (req,res) =>{
    console.log("Event created")

    res.status(200).json(res.locals.joint)
})
//Initial display -- all events at location
router.get('/:user',eventsController.getEventsInitial, (req,res) => {
    res.status(200).json(res.locals.events)
})
//Search by location/name -- might need to change how we're getting search params
router.get('/:user/search',eventsController.getEventsSearch, (req,res) => {
    res.status(200).json(res.locals.events)
})


//chats
// router.get('/:user/chats', eventsController.getChatList, (req, res) => {
//     res.status(200).json(res.locals.chatList) //send chatList
// })

// router.get('/:user/chats/',eventsController.getChatList, (req,res) =>{
//     res.status(200).json(res.locals.chat)
// })

router.get('/:user/chats/:events',eventsController.getChatLog, (req,res) =>{
    res.status(200).json(res.locals.chat)
})

router.post('/:user/chats/:events',eventsController.postMessage, (req,res) =>{
    res.status(200).json(res.locals.chat)
})

//add user to event
router.post('/:user/join/:events',eventsController.addUserToEvent,(req,res)=>{
    res.status(200).json(res.locals.chat)
})

module.exports = router;