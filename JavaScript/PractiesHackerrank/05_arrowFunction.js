var my_function = (some_array) => {
    return some_array.map(item => ( +item % 2 === 0 )? +item + 1 : +item - 1)
};

var my_function_2 = (some_array) => {
    return some_array.map(item => {
        let num = Number(item);
        return (num % 2 === 0) ? ++num : --num ;
    })}
