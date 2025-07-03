// Example-1

// const {readFile} = require('fs');

// console.log('started a first task');

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   console.log('Completed first task');
// })

// console.log('Starting next task')

// Example-2

// starting operating system process
// console.log('first');
// setTimeout(() => {
//   console.log('second');
// },0)
// console.log('third');
// completed and exited operating system process

// Example-3

// setInterval(() => {
//   console.log('hello world!');
// },2000)
// console.log(`I will run first`);

// Example-4

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World!');
})

server.listen(5000, () => {
  console.log('Server listening on port: 5000...')
})