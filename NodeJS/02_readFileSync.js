const fs = require('fs');

//blocking mode ,synchronous

const data = fs.readFileSync('./Readme.txt');
console.log(data.toString());
console.log(data); //buffer ASCII code