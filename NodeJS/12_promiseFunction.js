// function showText(text,time){
//     return new Promise((rs,rj)=>{
    //     console.log(text)
//         setTimeout(()=>{
//         rs()
//         },time)
//     })
// } 

// showText('A',1000)
// .then(()=> {return showText('B',1000)})
// .then(()=> {return showText('C',1000)})
// .then(()=> showText('D',1000))

function showText(text,time) {
    return new Promise(rs => {
        console.log(text)
        setTimeout(() => rs() ,time)
    })
} 

showText('A',1000)
.then( () => showText('B',1000))
.then( () => showText('C',1000))
.then( () => showText('D',1000))
