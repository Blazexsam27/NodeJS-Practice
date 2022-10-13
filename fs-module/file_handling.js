const fs = require('fs');

// Reading a file in utf-8 format.
fs.readFile('./static_files/test1.txt', 'utf-8', (error, data) => {
	if(error) console.log(error);
	else console.log(data);
});

// Writing a file, if file doesn't exist it creates a new one, the previous data is overwritten.
var data = "This Content is Written using fs module!"
fs.writeFile('./static_files/test1_written.txt', data, (error, response) => {
	if(error) console.log(error);
	else console.log("Data written Successfully!");
});

// Append data into a file, new file is created if file doesn't exist.
var append_data = "This data is appended using fs module!";
fs.appendFile('./static_files/test_appended.txt', append_data, (error, response) => {
	if(error) console.log(error);
	else console.log("Data appended Successfully!");
})

// Deleting a file.
const deleteFile = (path) => {
	fs.unlink(path, (error) => {
		if(error) console.log(error);
		else console.log('File Deleted!');
	})
}

// deleteFile('./static_files/test_appended.txt');