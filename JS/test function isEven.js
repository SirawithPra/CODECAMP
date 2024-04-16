function isEven(num){
    let result
    if (num%2===0){
        result =true
    }else{
        result=false
    }
}return result

function isEven2(num){
    let result=(num%2===0)? true : false
    return result
}

//
function isEven3(num){
    return (num%2===0)? true : false
}

//
function evenOdd(num){
    return (num===0)? "ศูนย์" : (num%2===0)? "เลขคู่": "เลขคี่"
}