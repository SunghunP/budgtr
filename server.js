require('dotenv').config();

// Dependencies
const express = require("express");
const { restart } = require('nodemon');
const budget = require('./models/budget.js');
const app = express();
const PORT = process.env.PORT || 3001;
const budgets = require('./models/budget.js');

// MIDDLEWARE
app.use(express.urlencoded({extended: false})); // body parser
app.use("/static", express.static("public")) // stores files for public view/easy access

// Routes
// Get route
app.get('/budgets/', (req, res) => {
	res.render('budgets_index.ejs', {budgets: budgets})
});

// create a new budget item
app.get('/budgets/new/', (req, res) => {
	res.render('budgets_new.ejs')
});

// Show route
app.get('/budgets/:index/', (req, res) => {
	const id = req.params.index
	res.render('budgets_show.ejs', {budgetItem: budgets[id]})
});

// Post Route
app.post('/budgets/', (req, res) => {
	const budgetItem = req.body
	console.log(budgetItem)
	budgets.push(budgetItem)
	res.redirect('/budgets/')
});

// choose what port to view the webpage at
app.listen(PORT, () => {
	console.log(`We are listening on port ${PORT}`)
})