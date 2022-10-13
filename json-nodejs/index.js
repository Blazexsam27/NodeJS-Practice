const bio = {
	name: "Blaze",
	age: "18"
}

const json = JSON.stringify(bio)
// console.log(json)
const fs = require('fs');


fs.readFile("./text.json", 'utf-8', (err, data) => {
	const orgData = JSON.parse(data)
	console.log(orgData.movie);
})

