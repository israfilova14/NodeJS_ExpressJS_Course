const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);
// {
//   uid: -1,
//   gid: -1,
//   username: 'huawei',
//   homedir: 'C:\\Users\\huawei',
//   shell: null
// }

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
// The System Uptime is 738823.437 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);
/*
{
  name: 'Windows_NT',
  release: '10.0.22631',
  totalMem: 8362713088,
  freeMem: 656150528
}
*/