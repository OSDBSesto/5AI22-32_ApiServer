const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

//-- http://localhost:3000/
app.get("/", function (req, res) {
  res.send("Hello World");
});

//-- http://localhost:3000/match?a=checchia&b=belvedere
app.get("/match", function (req, res) {
  res.send(
    "<h1>" +
      req.query.a +
      " match " +
      req.query.b +
      " : " +
      (Math.floor(Math.random() * 100) + 1) +
      "%</h1>"
  );
});

app.listen(3000);
