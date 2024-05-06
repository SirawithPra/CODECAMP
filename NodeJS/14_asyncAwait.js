let done = false;

//producing code here
function isItDoneYet() {
    return new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone);
    } else {
        const why = 'Still working on something else...'
        reject(why);
    }
});
}
//consuming code here , async await
async function checkIt(){
    try {
    let d = await isItDoneYet()
    console.log('Come from resolve state in Promise');
    console.log(d)

    } catch(err) {
        console.log('Come from reject state in Promise');
        console.log(err)
    }
}
checkIt();

//consuming code here
// const checkIfItsDone = () => {
//     isItDoneYet
//         .then((ok) => {
//             //ok is from workDone
//             console.log('Come from resolve state in Promise');
//             console.log(ok);
//         })
//         .catch((err) => {
//             //err is from why
//             console.log('Come from reject state in Promise');
//             console.log(err);
//         });      
// };
//checkIfItsDone();

