const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err) {
    console.log(err);
    return;
  }
  const firstText = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if(err){
       console.log(err);
       return;
    }
    const secondText = result;
    writeFile('./content/result-async.txt', `Here is the result : ${firstText}, ${secondText}`, (err, result) => {
      if(err){
         console.log(err);
         return;
      }
      console.log('done with this task');
    })
  })
})

console.log('starting next task');