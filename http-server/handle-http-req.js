const http = require('http');
const server = http.createServer((request, response) => {
	console.log(request.url)
	if(request.url == '/'){
		response.end("This Is Home Page")
	}
	else if(request.url == '/about'){

		response.end("This Is About Page")

	}
	else{
		response.writeHead(404, {'Content-type':'text/html'})
		response.end("<h1>404 PAGE</h1>");
	}
})

server.listen(8000, 'localhost', () => {
	console.log('Listening')
})