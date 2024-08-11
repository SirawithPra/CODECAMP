// write code here
let a = 1;
let b = 2;
let c = a++;  //return default a ก่อน แล้วค่อยบวกค่า +1, c=1, a=2
let d = ++c;  //return value of c++, d=2 , c=2
let e = ++d + d++ + d;
//เพิ่มค่า d ก่อน ดังนั้น e=3, d=3
//เพิ่มค่า d ทีหลัง ดังนั้น e=6, d=4
// e = 10, d=4

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`);
//a = 2, b = 2, c = 2, d = 4, e = 10