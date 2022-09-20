const { spawn } = require('child_process')
const myprocess = spawn('dir')

process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () => console.log("process end"));