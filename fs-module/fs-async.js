const fs = require('fs');

fs.writeFile('../static_files/read.txt', 'File Created Using Async Write', (err) => {
	if(err) console.log(err);
	console.log('file created successfully!');
})