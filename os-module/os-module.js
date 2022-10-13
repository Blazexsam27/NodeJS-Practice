const os = require('os');

console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.type())
console.log(os.tmpdir())
console.log(`Free RAM: ${os.freemem() / 1024 / 1024 / 1024} GB`)
console.log(`Total RAM: ${os.totalmem() / 1024 / 1024 / 1024} GB`)