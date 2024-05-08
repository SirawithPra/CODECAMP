//Promise All

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function pmRandom(){
    return new Promise((resolve, reject) =>{
        let n = getRandom(1,9);
        if (n<5) resolve(n)
        else reject(n)
    })
};

const pm1 = pmRandom()
const pm2 = pmRandom()
const pm3 = pmRandom()


Promise.all([pm1, pm2, pm3]).then(r => {
    console.log('All done')
    console.log(r)
}).catch(err =>{
    console.log('Not passed error')
    console.log(err)
} );