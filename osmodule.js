const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the systems uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    total:os.totalmem(),
    free:os.freemem()
}
console.log(currentOS)