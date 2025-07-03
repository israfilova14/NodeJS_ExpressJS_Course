// const {writeFileSync} = require('fs');

// for(let i = 0; i < 1000; i++){
//   writeFileSync('./content/big.txt', `hello world ${i}\n`);
// }

var http = require('http');
var fs = require('fs');
http
 .createServer(function(req, res){
      //  const text = fs.readFileSync('./content/big.txt', 'utf-8');
      //  res.end(text); 
      const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
      fileStream.on('open', () => {
        fileStream.pipe(res);
      })
      fileStream.on('error', (err) => {
        console.log(err);
      })
  })
 .listen(5000)