var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/stacks')

var db = mongoose.connection

db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log('database has been connected!')
})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var AnswerSchema = new Schema({
  body: String
})

var QuestionSchema = new Schema({
  title: String,
  body: String,
  answers: [ {type: Schema.ObjectId, ref: "Answers"} ]
})

var Question = mongoose.model("Question", QuestionSchema)
var Answer   = mongoose.model("Answer", AnswerSchema)

module.exports = {
  Question,
  Answer
}
