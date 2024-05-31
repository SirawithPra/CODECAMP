function addSync(a, b) {
    return a + b;
  }
let sum1 = addSync(1,2);

function add(a, b, callbackFunction) {
    callbackFunction( null, a + b );
  }
let sum2;
add(1, 2, (err, returnValue) => {
    sum2 = returnValue;
  });
console.log(sum1)
console.log(sum2)