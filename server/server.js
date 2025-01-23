const express = require("express");

const app = express();

const port = 5000;

app.use("/", (req, res) => {
  res.send("Server starts working...");
});

app.listen(port, () => {
  console.log("Server starts...");
});
