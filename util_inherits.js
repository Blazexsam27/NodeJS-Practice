const event = require('events');
const util = require('util');

function fruit(name){
	this.name = name;
}

util.inherits(fruit, event.EventEmitter);

var apple = new fruit('Apple');
apple.on('name', () => {
	console.log("Event is emmited and it asks for the name!");
	console.log("Object name is : " + apple.name);
})
apple.emit('name');