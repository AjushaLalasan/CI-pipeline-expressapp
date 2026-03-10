const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("CI pipeline");
});
module.exports = app;
