const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// API routes can be defined here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// For any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;