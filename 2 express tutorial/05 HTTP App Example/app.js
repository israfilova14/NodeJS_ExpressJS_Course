const http = require('http');
const {readFileSync} = require('fs');

// get all files
const navbar = readFileSync('./navbar/index.html');
const navbarStyles = readFileSync('./navbar/style.css');
const navbarLogic = readFileSync('./navbar/script.js');

const server = http.createServer((req, res) => {

  const url = req.url;

  // home page
  if(url === '/'){
       res.writeHead(200, {'content-type': 'text/html'})
       res.write(navbar);
       res.end();
  }
  //styles
  else if(url === '/style.css'){
     res.writeHead(200, {'content-type': 'text/css'});
     res.write(navbarStyles);
     res.end();
  }
  //logic
  else if(url === '/script.js'){
     res.writeHead(200, {'content-type': 'text/javascript'});
     res.write(navbarLogic);
     res.end();
  }
  // about page
  else if(url === '/about'){
       res.writeHead(200, {'content-type': 'text/html'})
       res.write('<h1>About Page</h1>');
       res.end();
  }
  // 404
  else{
       res.writeHead(404, {'content-type': 'text/html'})
       res.write('<h1>Error Page</h1>');
       res.end();
  }
})

server.listen(5000);