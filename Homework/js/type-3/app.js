// write code here'
let a = undefined;
let b = ' ';
let c = !b; // กลับค่า boolean of b(true) to c(false)
console.log(`a: ${a}, b: ${b}, c: ${c}`);
//a: undefined, b:  , c: false

// boolean(x) return false when x subset of {0, "", null, undefined, NaN }
let d = Boolean(a); // false ;a  = undefined
let e = Boolean(b); // true ;b = " "; มี space
let f = Boolean(c); // false ;c = false
console.log(`d : ${d}, e : ${e}, f : ${f}`);
//d : false, e : true, f : false