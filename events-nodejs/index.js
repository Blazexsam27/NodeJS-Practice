const EventEmitter = require('events');
const event = new EventEmitter();

event.on("sayMyName", () => {
	console.log("Your Name Is Blaze");
})

event.on("sayMyName", () => {
	console.log("Your Name Is xsam");
})

event.emit("sayMyName"); // When this event is emmitted, the callback function associated with it will fire.

event.on('checkPage', (status, msg) => {
	console.log(`Status code is : ${status} and message is ${msg}`)
})

event.emit('checkPage', 200, 'ok');