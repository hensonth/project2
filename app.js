var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var flash = require('connect-flash')
var session = require('express-session')

var passport = require('passport')
var MongoStore = require('connect-mongo')(session)

var dotenv = require('dotenv')

var mongoose = require('mongoose')
mongoose.Promise = global.Promise

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */

dotenv.load({ path: '.env.' + process.env.NODE_ENV })

mongoose.connect(process.env.MONGO_URI)

app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(layout)
app.use(session({
  secret: process.env.EXPRESS_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: process.env.MONGO_URI,
    autoReconnect: true
  })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// serve static files
app.use(express.static(__dirname + '/public'))

var frontendRoutes = require('./routes/shoes')
var ajaxRoutes = require('./routes/shoes_api')

var usersRoutes = require('./routes/users')

var mainRoutes = require('./routes/main')

app.use(bodyParser.json()) // to parse ajax json req
app.use(bodyParser.urlencoded({
  extended: true
})) // to parse form submitted data

require('./config/passport')(passport)

app.use('/shoes', frontendRoutes) // only render ejs files
app.use('/api/shoes', ajaxRoutes) // only handle ajax request
app.use('/', usersRoutes)

app.use('/main', mainRoutes)

app.listen(process.env.PORT || 3000)
console.log('Server started')
