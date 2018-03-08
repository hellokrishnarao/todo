var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (request, response) =>{
	var todo = new Todo({
		text : request.body.text
	});

	todo.save().then((doc) =>{
		response.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log("Started server on 3000");
});