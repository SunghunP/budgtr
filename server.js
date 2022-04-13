// Dependencies
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001


// Routes
// Get route
app.get('/budgets')

// New route
app.get('/budgets/new/')

// Show route
app.get('/budgets/:index/')

// Create Route
app.post('/budgets/')
//
app.listen(PORT, () => {
	console.log("We are listening on port ", PORT)
})