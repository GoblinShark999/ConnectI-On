//place in usercontroller, import
require('dotenv').config()
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 11;

/** @typedef {import("express").RequestHandler} RequestHandler */

const userAuthController = {};

//authenticate jwt
/** @type {RequestHandler} */
userAuthController.authenticateJWT = (req, res, next) => {
  const { auth: token } = req.cookies;
  console.log(req.cookies);
  if (!token) return res.sendStatus(401); //maybe use global error handler, next(err);

  //now verify after getting the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => { //authenticate with jwts, what does req.user return
    if (err) {
      console.error(err);
      return res.sendStatus(403); //again, use global error handler
    }
    console.log(payload)
    res.locals.user = payload;
    return next();
  })
}

//now when user 'subscribes' to a chat, only those chats will show up instead of all
// app.get('/:user/event/:chats', authenticateJWT, (req, res) => {
//     //pool.query for user and chat's
//     const foundUser = pool.query()
//     if (foundUser.user !== req.user) res.status(401) //if user in DB and user from JWT are not the same, send back error page

//     res.json(foundUser.chats) //return chats, this seems wrong
// })

/** @type {RequestHandler} */
userAuthController.setJWT = (req, res, next) => {
  // Check if res.locals.user actually has user info
  if (!res.locals.user) {
    return next({
      log: 'userAuthController.getJWT: No user data stored in locals',
      status: 500,
      message: { err: 'An error occurred authenticating user' },
    });
  }

  // Sign JWT, and store the token into cookies under 'auth'
  jwt.sign(res.locals.user, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      console.log(err);
      return next({
        log: 'Express error handler caught error in userAuthController.getJWT',
        status: 500,
        message: { err: 'An error occurred authenticating user' },
      });
    }

    res.cookie('auth', token, { httpOnly: true });
    return next();
  });
}

module.exports = userAuthController;