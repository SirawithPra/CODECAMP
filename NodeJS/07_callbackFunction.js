function dropBall(before, after){
    before()
    console.log('catch ball')
    console.log('release')
    after()
}

function kickBall(){
    console.log('kick ball')
}

function buyBall(){
    console.log('buy ball')
}

dropBall(buyBall, kickBall)
console.log('--------------------------------')
dropBall(kickBall, buyBall)