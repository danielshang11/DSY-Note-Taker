const app = require('express').Router();
const path = require('path');

// GET /notes should return the notes.html file. (From getting started section of homework)
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '..','public','notes'));
});
// GET * should return the index.html file. (From getting started section of homework)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '..','index.html'));
});
//Exporting the app to be used in server.js
module.exports = app;