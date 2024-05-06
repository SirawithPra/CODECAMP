const fs = require('fs');

const getFile = fileName => {
    return new Promise(rs => {
        if (fileName==='f02.txt') rj('Error: file F02');
        fs.readFile(fileName, 'utf-8',(err, data) => rs(data)) //must have ERR every time
    })
}

getFile('./start.txt')
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)})
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)})
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)})
    .then(data => {
        console.log(`${data}`)
        return getFile(`${data}`)})
    .catch(err => {
        console.error('Error : ' + err + ' : ' +err.message)
    })