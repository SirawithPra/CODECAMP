

function findDay(myDate) {
    
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
    const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    console.log(day[(new Date(myDate).getDay())])
}

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var dates = _input.split('\n');

    for (var i = 0; i < dates.length - 1; i++) {
        findDay(dates[i]);
    }
});