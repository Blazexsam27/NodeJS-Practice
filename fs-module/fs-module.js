const fs = require('fs');

// fs.appendFileSync('./static_files/challenge1.txt', "CHALLENGE UPDATED");

// const data = fs.readFileSync("./static_files/challenge1.txt", 'utf-8')
// console.log(data)

// fs.rename("./static_files/challenge1.txt", "./static_files/challenge1_completed.txt", function (err) {
// 	if(err) throw err;
// 	console.log('file renamed')
// });

fs.unlinkSync("./static_files/challenge1_completed.txt");