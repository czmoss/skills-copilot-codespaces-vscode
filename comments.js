// Create web server using express
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Create a comments array
var comments = [
    {name: 'John', message: 'Hello, World'},
    {name: 'Mary', message: 'Hi, there'}
];

// Get comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Add comments
app.post('/comments', function(req, res) {
    comments.push(req.body);
    res.json(comments);
});

// Delete comments
app.delete('/comments/:index', function(req, res) {
    var index = req.params.index;
    comments.splice(index, 1);
    res.json(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
