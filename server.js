/*
 * Primary file for all router
 *
 */

// Requiring routes
const fs = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');


app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}, Method: ${req.method}, URL: ${req.url}`;
	// console.log(log);
	fs.appendFileSync('server.log', log + '\n');
	next();
});

// Setup Basic Routes
app.get('/', (req, res) => {
	res.render('home');
});

app.get('/:id', (req,res) => {
	res.send('This is individual post');
});

app.get('/about', (req, res) => {
	res.render('about');

});

app.get('/contact', (req,res) => {
	res.render('contact');
});

app.listen(3000, () => {
	console.log('Server has started on port 3000');
});