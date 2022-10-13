const fs = require('fs');

fs.writeFile('../static_files/challenge2.txt', 'This is challenge 2 of fs-module', (err) => {
	if(err) console.log(err);
	console.log('Data written!')
})

fs.appendFile("../static_files/challenge2.txt", '\nNew Line Appended', (err) => {
	if(err) console.log(err);
	console.log('new data added')
})

fs.readFile("../static_files/challenge2.txt", 'utf-8', (err, data) => {
	if(err) console.log(err);
	console.log(data);
})

fs.rename("../static_files/challenge2.txt", '../static_files/challenge2_completed.txt', (err) => {
	if(err) console.log(err);
	console.log('File Name Changed')
})