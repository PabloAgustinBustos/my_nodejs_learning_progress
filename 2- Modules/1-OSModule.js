const os = require("os")

// userInfo() -> info about current user
const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log("uptime is " + os.uptime() + " seconds");

// another info
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)