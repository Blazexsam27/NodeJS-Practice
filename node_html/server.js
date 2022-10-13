const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/index.html");
const server = http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/html'})
	readStream.pipe(response);
});

server.listen(5000);