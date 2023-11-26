// Create Express app
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('view engine', 'html');

// Define function to add two numbers
function addNumbers(num1, num2) {
	return num1 + num2;
}

// Handle GET request to /add
app.get('/add', (req, res) => {
	const num1 = parseInt(req.query.num1);
	const num2 = parseInt(req.query.num2);

	const sum = addNumbers(num1, num2);

	res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
