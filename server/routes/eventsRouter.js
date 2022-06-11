const express = require('express');
const router = express.Router();
const app = express();
const eventsController = require('../controllers/eventsController.js');
const userController = require('../controllers/userController');

//main
// app.get('/', userController.getUser, (req,res) =>{

// })
// app.post('/'), userController.updateUser, (req, res) => {

// }


//create event?

//chats
app.get('/chats/:event')

module.exports = router;