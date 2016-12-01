var express = require("express");
var app = express();
var Schema = require("./db/schema.js")
var bodyParser = require('body-parser')



var Question = Schema.Question
var Answer = Schema.Answer

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.listen(4000, () => {
  console.log("app listening on port 4000");
});



app.get("/questions", (req, res) => {
  Question.find({}).then(function(questions) {
    res.json(questions)
  })
});

app.get("/questions/:title", (req, res) => {
  Question.findOne({title: req.params.title}).then(function(question) {
    res.json(question)
  })
})

app.put("/questions/:title", (req, res) => {
  Question.findOneAndUpdate({title: req.params.title},
  req.body.question, {new: true}).then(function(question){
    res.json(question)
  })
})

app.post("/questions", (req, res) => {
    Question.create(req.body.question).then(function(question) {
      res.json(req.body)
    })
  })

app.delete("/questions/:title", function(req, res){
  Question.findOneAndRemove({title:
  req.params.title}).then(function(){
    res.json({ success: true })
  })
})
