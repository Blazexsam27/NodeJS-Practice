const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
	const data = fs.readFileSync("./userapi.json", 'utf-8');

	if(request.url == '/'){
		fs.readFile('./userapi.json', 'utf-8', (err, data) => {
			response.writeHead(200, {
				"Content-Type" : 'application/json'
			})
			response.end(data)
		});
	}
})

server.listen(8000, 'localhost', () => {
	console.log("listening")
})