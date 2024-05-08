const  rd = require('./19_myUtil');
let x = rd.getRandom(5,9)
console.log(x);
console.log(rd.pi);
console.log(Math.round(rd.circleArea(x)*100)/100);
console.log('--------------------------------')
let x2 = rd.getRandom()
console.log(x2);
console.log(rd.pi);
console.log(Math.round(rd.circleArea(x2)*100)/100);

user = rd.user
console.log(user);
console.log(user.name);
user.name = 'Pumpkin';
console.log(user);