// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");

// create an instance of express to serve the student endpoint
const app = express();

// node's built in file system helper library used for the students json file
const fs = require("fs");

// configure express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require("./routes/routes.js")(app, fs);

// launch server on port 3001.
const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
