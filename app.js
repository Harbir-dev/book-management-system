
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//make connection with mongoDB on server start
require("./db-connections/mongodb/connect-mongo.js")();

const errorHandler = require("./middlewares/error-handler/error-handler.js");

const apiEndPoints = require("./routes/routes.js");

//  Get port from environment and store in Express
const port = normalizePort(process.env.PORT || "3000");

//for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for all routes
app.use(cors());

app.use(logger);

//routes
app.use(apiEndPoints);

function logger(req, res, next) {
  console.log(req.url);
  next();
}

//Keep this middleware the final middleware always, so that it catches all the errors
app.use(errorHandler);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
app.listen(port, () => {
  console.log("Server Connected PORT " + port);
});
