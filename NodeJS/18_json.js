//https://www.learningcontainer.com/?s=json+

const fs =require('fs');

let data, jsObject, users, newData

data = fs.readFileSync('./sample.json');
//console.log(data.toString());
jsObject = JSON.parse(data.toString());
// console.log(jsObject);
// console.log(jsObject.users[0].emailAddress);
users = jsObject.users

users.map ( x => {
    x.firstName = x.firstName.slice(0,1).toUpperCase()+x.firstName.slice(1)
    x.lastName = x.lastName.slice(0,1).toUpperCase()+x.lastName.slice(1)
    {(x.lastName==='Mac')?x.lastName='Apple' : x.lastName = x.lastName}
    console.log(`${x.firstName} : ${x.lastName} : ${x.phoneNumber}` )
    x.phoneNumber = x.userId.toString().repeat(9)
})
//console.log(users)

newData = JSON.stringify(jsObject)
fs.writeFileSync('./output.json', newData)