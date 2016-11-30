var Schema = require("./schema.js")

var Question = Schema.Question
var Answer   = Schema.Answer

Question.remove({}, err => {
  if(err){
    console.log(err)
  }
})

Answer.remove({}, err => {
  if(err){
    console.log(err)
  }
})

var q1 = new Question({title: "What's html?", body:"I am new to learning coding. What's html?"})

var a1 = new Answer({body:"It's a markup language!"})
var a2 = new Answer({body:"You're in for a good time."})
var a3 = new Answer({body:"Don't worry about."})



q1.answers.push(a1,a2,a3)

q1.save((err, question) => {
  if (err) {
    console.log(err)
  } else {
    console.log(question)
  }
})
