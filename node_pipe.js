const fs = require('fs');

const readStream = fs.createReadStream(__dirname + "/static_files/big_data_file.txt");
const WriteStream = fs.createReadStream(__dirname + "/static_files/stream_written.txt");
readStream.pipe(WriteStream);