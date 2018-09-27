require('dotenv').config()
const express   = require('express')
const logger    = require('morgan')
const cors      = require('cors')
const app       = express()
const mongoose  = require('mongoose')

const port = 4000

let database = process.env.DATABASE_DEV
if(process.env.NODE_ENV === 'test') {
  database = process.env.DATABASE_TEST
} else if(process.env.NODE_ENV === 'prod') {
  database = process.env.DATABASE_PROD
}
mongoose.connect(database, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is Connecting')
});

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const indexRouter = require('./routes/index')
const timelineRouter = require('./routes/timeline')
const commentsRouter = require('./routes/comment')

app.use('/user', indexRouter)
app.use('/timeline', timelineRouter)
app.use('/comments', commentsRouter)

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

app.listen(port, ()=> {
  console.log(`Server running at port ${port}`)
})

module.exports = app