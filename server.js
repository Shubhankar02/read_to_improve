/*
 * Primary file for all router
 *
 */

// Requiring routes
const fs = require('fs');
const express = require('express');
const app = express();

app.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}, Method: ${req.method}, URL: ${req.url}`;
	console.log(log);
	fs.appendFileSync('server.log', log + '\n');
	next();
});

// Setup Basic Routes
app.get('/', (req, res) => {
	res.send('Hello, This is a HomePage');
});

app.get('/about', (req, res) => {
	res.send('This is a about page');
});

app.get('/contact', (req,res) => {
	res.send('This is a contact page');
});

app.listen(3000, () => {
	console.log('Server has started on port 3000');
});