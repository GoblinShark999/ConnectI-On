const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const eventsRouter = require('./routes/eventsRouter.js');

app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})


app.use('/', eventsRouter);
    // localhost:3000/login --> router.get('/')
    //http://localhost:8080/login?username=a&password=1234&location=b 
    // how to handle sign ups


//app.use('/:user/chat', chatRouter);
// app.use('/:user', eventsRouter);


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


app.listen(PORT, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
});