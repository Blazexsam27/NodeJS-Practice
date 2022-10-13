const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, response) => {
  response.send("This is Home page of express based server");
});
app.get("/about", (req, response) => {
  response.send("This is about page of express based server");
});
app.listen(port, () => {
  console.log("Server started");
});
