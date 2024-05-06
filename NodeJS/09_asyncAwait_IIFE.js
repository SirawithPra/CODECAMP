const fs = require('fs');
const { run } = require('node:test');
function getFile(fileName){
//const getFile = fileName => {
    return new Promise((rs,rj) => {
        if (fileName==='f05.txt') rj('Error: file F02');
        fs.readFile(fileName, 'utf-8', (err, data) => rs(data)) //must have ERR every time
    })
}

//IIFE is Immediately Invoked Function Expression
(async () => {
    try {
        let data = await getFile('./start.txt')
        console.log(`${data}`)
        data = await getFile(data)
        console.log(data)
        data = await getFile(data)
        console.log(data)
        data = await getFile(data)
        console.log(data)
        //variable's name are reusable
    } catch(err){
        console.error('Error : ' + err + ' : ' +err.message)
        
    }
})() //just use only one time

//async function runGetFile() {
    //try{
        // const data1 = await getFile('./start.txt')
        // console.log(`${data1}`)
        // const data2 = await getFile(data1)
        // console.log(data2)
        // const data3 = await getFile(data2)
        // console.log(data3)
        // const data4 = await getFile(data3)
        // console.log(data4)


//promise function

// getFile('./start.txt')
//     .then(data => {
//         console.log(`${data}`)
//         return getFile(`${data}`)})
//     .then(data => {
//         console.log(`${data}`)
//         return getFile(`${data}`)})
//     .then(data => {
//         console.log(`${data}`)
//         return getFile(`${data}`)})
//     .then(data => {
//         console.log(`${data}`)
//         return getFile(`${data}`)})