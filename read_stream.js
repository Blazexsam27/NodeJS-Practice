const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/static_files/big_data_file.txt", 'utf-8');

readStream.on('data', (chunk) => {
	console.log("Received Some Data!");
	console.log(chunk);
})