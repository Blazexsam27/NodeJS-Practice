const event = require('events');

const testEvent = new event.EventEmitter();
testEvent.on('test', (args) => {
	console.log("Test Event Occured");
	console.log(args);
})

testEvent.emit('test', 'Hello');