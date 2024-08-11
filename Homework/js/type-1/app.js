// write code here
let a = undefined;
let b = 2;
let c = a++; //c = undefined, a = NaN

let d = String(a);
//"NaN"
let e = String(b);
//"2"
let f = String(c);
//"undefined"

console.log(`d : ${d}, e : ${e}, f : ${f}`);
// d : NaN, e : 2, f : NaN (app.js, line 13)