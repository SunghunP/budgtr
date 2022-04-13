require('dotenv').config();

// Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const budgets = require('./models/budget.js');


// Routes
// Get route
app.get('/budgets/', (req, res) => {
	res.render('budgets_index.ejs', {budgets: budgets})
});

// New route
app.get('/budgets/new/',);

// Show route
app.get('/budgets/:index/',);

// Create Route
app.post('/budgets/',);
//
app.listen(PORT, () => {
	console.log(`We are listening on port ${PORT}`)
})