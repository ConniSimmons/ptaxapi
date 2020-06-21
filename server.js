// requre express, dotenv, mongoose
const express = require("express");
require("dotenv").config();
const port = require("./config").PORT;
const cors = require("cors");
const argon2 = require("argon2");

// import all of the models (dao)
const Mailinglist = require("./api/mailinglist/mailinglist.dao");
const Ptaxlist = require("./api/ptaxlist/ptaxlist.dao");

//import my generic route generator files
const routerGen = require("./api/router");

// import my database connection settings
const db = require("./db");
const server = express();

//middleware stuff:
server.use(express.json());
server.use(cors());

//tell the database to actually connect:
db();

// tell the app to use our api routes
server.use("/", routerGen(Mailinglist));
server.use("/", routerGen(Ptaxlist));

// get constants from my settings file
let { PORT, DBNAME } = require("./config");

server.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

// logger, linstener
const requestLogger = (req, res, next) =>
{
        const now = new Date();
        console.log(`${now}:::> Incoming ${req.method} request to ${PORT}.`)
        next();
}
server.use(requestLogger);
server.use(express.json());

//listener
server.listen(5555, (err) => {
  if (err) {
    console.log("Error starting server: ", err);
  }
  console.log(`${DBNAME} is listening on port ${PORT}.`);
});
