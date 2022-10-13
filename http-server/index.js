const http = require('http');
const server = http.createServer((request, response) => {
	response.end("Hello From The Server")
})

server.listen(8000, 'localhost', () => {
	console.log("Listening")
})