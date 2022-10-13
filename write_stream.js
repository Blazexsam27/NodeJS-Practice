const fs = require('fs');

const writeStream = fs.createWriteStream(__dirname + "/static_files/stream_written.txt");
const data = "This data is written using write stream method!";

writeStream.write(data);

// For writing huge data by reading it from somewhere else user below method

readStream = fs.createReadStream(__dirname + "/static_files/big_data_file.txt");

readStream.on('data', (chunk) => {
	console.log("Received Some Data");
	writeStream.write(chunk);
})

// Above functionality can also be obtained using pipe(), which is more subtle way of doing such stuff.
// checkout node_pipe.js file.