const jwt = require('jsonwebtoken');

const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController.js');
const userController = require('../controllers/userController');
const userAuthController = require('../controllers/userAuthController')

//main
router.post('/signup', userController.createUser, (req,res)=>{ //signup
    res.status(200).json("User created")
})

router.post('/login', userController.getUser, (req,res) =>{ //login
    //if using JWTs
    // const { username } = req.body; //make sure information is sent in the body instead of queries, shouldn't be able to see pw in browser
    // const user = { user: username };
    // console.log('from inside login, testing body', req.body)
    // console.log('inside login', user, process.env.ACCESS_TOKEN_SECRET);

    // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) //use res.locals.user
    // // res.json( {accessToken} ); //store in authorization header and/or cookie
    
    res.status(200).json(res.locals.user)
})

// router.get('/:user', userAuthController.authenticateJWT, (req, res) => { //authorize user to visit pages
//     res.status(200).json('user chats from db') //send user chats from db?
// })

router.post('/:user/update'), userController.updateUser, (req, res) => { //stretch feature
    res.status(200).json(res.locals.user)
}


//events
router.post('/create', eventsController.createEvent, (req,res) =>{
    res.status(200).json("Event created")
})
///events/searchEvents?name=${eventData.name}&location=${eventData.location}`
//search events
// router.get('/events/searchEvents', eventsController.getEvent, (req,res) =>{
//     res.status(200).json(res.locals.events)
// })

//chats
router.get('/chats/:event')

module.exports = router;