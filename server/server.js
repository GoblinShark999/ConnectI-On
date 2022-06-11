const path = require('path');
const express = require('express');
const app = express();


const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const cors = require('cors')
app.use(cors());

const eventsRouter = require('./routes/eventsRouter.js');

const PORT = 3000;

app.use(testingConnection)
// io.on('connection', (socket) => { //when the client connects...
//     console.log(socket.id,"socket id");
// })

// app.get('/test', testingConnection, (req,res) =>{
//   console.log("working")
//   res.status(200).send("okay")
// })

function testingConnection() {
io.on('connection', (socket) => { //when the client connects...
    console.log(socket.id);
    // socket.on('send-message', (message, eventLocation) => { // creating a custom listener event, client sends message
    //     if (eventLocation)
    //     socket.broadcast.emit('custom-event2', message) //receive-message
    //         //insert into the database w/ pool.query
            
    // })
})
next();
}



// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });



//why iseaddrinuse
    //where does socket.io belong? 

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.use(express.urlencoded({extended : true}));



app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})


//app.use('/:user/chat', chatRouter);
app.use('/:user', eventsRouter);


//Error handling
app.use((req, res) => {
    console.log('Page not found error caught in server');
    return res.status(404).send('Page not found.')
  });

  app.use(defaultErrorHandler);
  function defaultErrorHandler(err, req, res, next){
    const defaultErr = 
    {
      log : 'Express error handler caught unknown middleware error',
      status : 400,
      message : { err: 'An error occured'}
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(JSON.stringify(errorObj.message));
  };

// server.listen(3000, () => {
//     console.log('listening on :', PORT, process.env.NODE_ENV);
//   });

app.listen(3000, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
}); //NOT LISTENING TO ACTUAL APPLICATION DOESN'T PRODUCE ERROR: EADDRINUSE 