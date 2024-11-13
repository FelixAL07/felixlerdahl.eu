const express = require("express");
const path = require("path");//+
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));//-
// Serve static files from the 'public' directory//+
app.use(express.static(path.join(__dirname, '..', 'public')));//+

// Define routes//+
app.get("/", (req, res) => {//+
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));//+
});//+
//+
app.get("/about", (req, res) => {//+
  res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));//+
});//+
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
