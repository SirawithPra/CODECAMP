function processData(myArray) {
    let maxValue = Math.max(...myArray);
    let secondMax = -Infinity; // Initialize to -Infinity to handle negative numbers

    myArray.forEach(x => {
        if (x > secondMax && x < maxValue) {
            secondMax = x;
        }
    });

    console.log(secondMax);
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});

// place Ctrl+D for "End" process of input