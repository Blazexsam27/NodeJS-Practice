const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type":"text/plain"})
  response.end("Server Is Started!")
});

server.listen(5000);
