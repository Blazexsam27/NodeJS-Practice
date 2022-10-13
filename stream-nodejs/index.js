const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
	console.log("This is server Page")
})
// const data = `Hello guys!
// Its me Blazexsam.
// Hope you're doing well
// see you in the next video.\n`;
// fs.writeFile("./input.txt", data, (err) => {
// 	if(err) console.log(err);
// 	console.log("Data written Successfully")
// })

// server.on('request', (req, res) => {
// 	fs.readFile("input.txt", 'utf-8', (err, data) => {
// 		if(err) console.log(err)
// 		res.end(data)
// 	})
// })

server.on('request', (request, response) => {
	const rstream = fs.createReadStream("input.txt");
	rstream.on('data', (dataChunk) => {
		response.write(dataChunk);
	})
	rstream.on('end', () => {
		response.end()
	})
	rstream.on('error', (err) => {
		console.log(err)
		response.end('file not found')
	})
})


server.listen(8000, "localhost", () => {
	console.log("Server is listening")
})