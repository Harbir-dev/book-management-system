const mongoose = require("mongoose");
require("dotenv").config();;

const dbParams = require("config").get("mongoDB");

module.exports = () => {
  // database connection configuration
  const url = dbParams.connection_url;
  mongoose.connect(url);

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("Database Connected")
  })
}