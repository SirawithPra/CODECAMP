const mu = require('./19_myUtil');

class Human {
    constructor(name ,age =mu.getRandom(20,50)) {
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

module.exports.Human = Human;
//module.exports=Human;