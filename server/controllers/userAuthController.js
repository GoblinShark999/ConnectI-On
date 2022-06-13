//place in usercontroller, import
require('dotenv').config()
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 11;

const userAuthController = {};

//password storage setup
userAuthController.userSignUp = (req, res, next) => {
    const { username, password } = req.body; //** might not come from req.body, deconstruct other necessary columns for db insertion

    bcrypt.hash(password, saltRounds).then((hash) => {
        // Store hash (hashed pw) in your password DB.
            //pool.query + insert new user
    });

}

userAuthController.checkUser = (req, res, next) =>{
    const { username, password } = req.body; // grab other cols for row insertion into user table
    
    //... fetch user from db
    const foundUser = await pool.query() // query for username and grab stored hashed pw

    const match = await bcrypt.compare(password, foundUser.passwordHash); //boolean expected

    if(match) {
        //login
    }

    //...
}



//jwts set up
app.post('/login', (req, res) => {
    const { username } = req.body;
    const user = { user: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json( {accessToken} ); //where does this get stored, headers?
})

//authenticate jwt
userAuthController.authenticateJWT = (req, res, next) =>{
    const authHeader = req.headers('authorization');
    const token = authHeader && authHeader.split(' ')[1]; //Bearer <Token>, token will be undefined or have a value
    if (token === null) return res.status(401); //maybe use global error handler, next(err);

    //now verify after getting the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => { //authenticate with jwts, what does req.user return
        if (err) return res.status(403); //again, use global error handler
        req.user = user;
        next();
    })
}

//now when user 'subscribes' to a chat, only those chats will show up instead of all
app.get('/:user/event/:chats', authenticateJWT, (req, res) => {
    //pool.query for user and chat's
    const foundUser = pool.query()
    if (foundUser.user !== req.user) res.status(401) //if user in DB and user from JWT are not the same, send back error page

    res.json(foundUser.chats) //return chats, this seems wrong
})

module.exports = userAuthController;