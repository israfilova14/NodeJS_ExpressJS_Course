const path = require('path');

// console.log(path);
console.log(path.sep); // \

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);  // \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base); // test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
// C:\Users\huawei\OneDrive\Desktop\nodejs\06 Built  in Modules\2 Path Module\content\subfolder\test.txt