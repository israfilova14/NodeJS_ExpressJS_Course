const http = require('http');

// const server = http.createServer((req, res) => {
//   //  console.log(req);
//   //  console.log(res);
//   if(req.url === '/'){
//     res.end('Welcome to home page');
//   }
//   if(req.url === '/about'){
//     res.end('Here is a short history');
//   }
//   else{
//     res.end(`<h1>Ooops!</h1>
//            <p>We can't seem to find the page you are looking for</p>
//            <a href='/'>Back home</a>`);
//   }
  
// })

// server.listen(5000);

// Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it

server.on('request', (req, res) => {
  res.end('Welcome');
})

server.listen(5000);