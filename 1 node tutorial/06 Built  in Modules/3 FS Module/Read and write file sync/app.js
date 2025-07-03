const fs = require('fs');
fs.readdirSync();

console.log('start');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: \n\n${first}, \n\n${second}`
);

console.log('done with this task');
console.log('starting the next one')