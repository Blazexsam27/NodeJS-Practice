const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
	console.log('server created')
})

server.on('request', (request, response) => {
	const rstream = fs.createReadStream('input.txt');
	rstream.pipe(response);
})

server.listen(8000, 'localhost')