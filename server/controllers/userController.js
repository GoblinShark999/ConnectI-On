// const fetch = require('node-fetch');
// const { DllPlugin } = require('webpack');
const db = require('../models/dataModel.js')
const bcrypt = require('bcrypt');
const saltRounds = 11;

const userController = {};


userController.createUser = async (req, res, next) => {
  console.log(req.body, 'req body from users')

  const { username, password, location } = req.body

  console.log(username)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('testing hashed, bcrypt password', hashedPassword);

  try {
    const text = 'INSERT INTO users(username, password, location) VALUES($1,$2,$3) RETURNING *';//${username},${password},${location},${session}
    //const text = `INSERT INTO user_test(username, password, location) VALUES('aliya','1234','Boise','1')`;
    const values = [username, hashedPassword, location];
    console.log("there")
    const result = await db.query(text, values);
    // console.log('testing result', result) 
    res.locals.result = result;
    return next();
  }
  catch (err) {
    console.error(err);
    next({
      log: 'Express error handler caught error in userController.createUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

userController.getUser = async (req, res, next) => {
  console.log(req.body, 'req body from users')

  const { username, password } = req.body;


  const text = `
    SELECT _id, username, location
    FROM users
    WHERE username = $1
  `;
  const values = [username] //need only username to find row then later compare req.body.password to hashed db password


  try {
    const userData = (await db.query(text, values)).rows[0];
    const dbPassword = userData.password;
    const match = await bcrypt.compare(password, dbPassword);

    // console.log(userData)

    if (match) {
      res.locals.user = userData;
      return next();
    } else {
      return next({
        log: 'Incorrect username and/or password in userController.getUser',
        status: 401,
        message: { err: 'Incorrect username and/or password.' },
      })
    }
  }
  catch (err) {
    console.error(err);
    next({
      log: 'Express error handler caught error in userController.getUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

//update user -- what do we want to update?
userController.updateUser = async (req, res, next) => {
  //console.log('from get user_test')
  const { user } = req.params
  const { location } = req.body
  console.log(req.body)
  const text = `UPDATE users SET location=$2 WHERE username=$1`
  const values = [user, location]
  try {
    const updated = await db.query(text, values)
    res.locals.user = updated;
    return next();
  }
  catch (err) {
    console.error(err);
    next({
      log: 'Express error handler caught error in userController.updateUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
}

module.exports = userController;