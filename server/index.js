const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Home page");
});

app.get("/about", (req, res) => {
  console.log("About page");
});

app.listen(3001);
