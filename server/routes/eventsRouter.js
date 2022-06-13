const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/eventsController.js');
const userController = require('../controllers/userController');

//main
// app.get('/', userController.getUser, (req,res) =>{

// })
// app.post('/'), userController.updateUser, (req, res) => {

// }


//create event?

//chats, user/chats/:event will store websocket connection
router.get('/chats/:event', (req, res) => {
    console.log("in eventsRouter")
    console.log(res.locals);
    res.status(200).send("working");
})

module.exports = router;