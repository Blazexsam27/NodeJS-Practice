const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/static_files/big_data_file.txt");
const server = http.createServer((request, response) => {
	readStream.pipe(response);
});

server.listen(5000);