const express = require('express')

const port = 9090

const app = express();

const path = require('path')

app.use('/uploads',express.static(path.join(__dirname,('uploads'))))

const db = require('./config/mongoose')

const passport = require('passport')

const passportjwt = require('./config/passport-jwt')

const session = require('express-session')

app.use(session({
    name : "smit",
    secret : 'gandhi',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*24
    }
}))

app.use(passport.session())
app.use(passport.initialize())
app.use(express.urlencoded())

app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log("Server is start on port",port);
})