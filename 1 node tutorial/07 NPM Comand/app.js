// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init-y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// "scripts": {
//   "start": "node app.js",   
//    npm start = npm run start = node app.js
//   "dev": "nodemon app.js" 
//    npm run dev 
//  },

// npm i bootstrap
// npm uninstall bootstrap

// installing nodemon globally
// npm install -g nodemon 