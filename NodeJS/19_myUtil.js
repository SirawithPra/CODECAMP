let pi = Math.PI
const user = {
    name: 'John',
    Age: 36
}
function getRandom(min=0, max=9) {
    return Math.floor(Math.random()*(max-min+1))+min;
};

// module.exports.circleArea = function circleArea(radius=1){
exports.circleArea = (radius=1)=>{
    return pi*radius*radius;
}

module.exports.getRandom = getRandom;
module.exports.pi = pi;
module.exports.user = user;
