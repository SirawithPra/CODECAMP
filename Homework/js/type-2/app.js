// write code here'
let a = undefined;
let b = null;
let c = b + '4 2';
console.log(`a: ${a}, b: ${b}, c: ${c}`);
//a: undefined, b: null, c: null4 2

let d = Number(a); // NaN เพราะ undefined ไม่สามารถเป็นเลขได้
let e = Number(b); // 0 เพราะ null แปลงเป็น 0 ได้
let f = Number(c); // NaN เพราะ มีช่องว่าง
console.log(`d : ${d}, e : ${e}, f : ${f}`);
//d : NaN, e : 0, f : NaN

let d_2 = parseInt(a); // NaN ไม่สามารถแปลงเป็นเลขได้
let e_2 = parseInt(b); // NaN ไม่สามารถแปลงเป็นเลขได้
let f_2 = parseInt(c); // NaN ไม่สามารถแปลงเป็นเลขได้
console.log(`d_2 : ${d_2}, e_2 : ${e_2}, f_2 : ${f_2}`);
//d_2 : NaN, e_2 : NaN, f_2 : NaN
