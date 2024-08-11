// write code here
let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);
console.log(1*'4')// 1*'4' = 4
console.log(+null)// +null = 0
console.log(+' ')// +' ' = 0
console.log('5'*2)// '5'*2 = 10
console.log((7+2+''+ +!!undefined))// (7+2+'' +!!undefined) = "9"+ +!!undefined = "9" + +false = "90"
console.log(+("90"))// +("90") = 90

// 4+0+0-10+90 = 84
console.log(a)