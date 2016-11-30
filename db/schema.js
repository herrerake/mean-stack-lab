var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stacks')

var db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log('database has been connected!')
})
