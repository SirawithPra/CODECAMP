let done = false;

//producing code here
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone);
    } else {
        const why = 'Still working on something else...'
        reject(why);
    }
});

//consuming code here
const checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => {
            //ok is from workDone
            console.log('come from resolve state in Promise');
            console.log(ok);
        })
        .catch((err) => {
            //err is from why
            console.log('come from reject state in Promise');
            console.log(err);
        });
};

checkIfItsDone();

