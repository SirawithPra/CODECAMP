// function isEmptyObject(obj) {
//   return Object.keys(obj).length === 0;
// }

const isEmptyObject = obj => !Object.keys(obj).length;

const product1 = {};
const product2 = { name: "Laptop" };

console.log(isEmptyObject(product1)); 
// true 
console.log(isEmptyObject(product2)); 
// false
