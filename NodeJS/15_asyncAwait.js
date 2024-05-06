function showText(text,time) {
    return new Promise(rs => {
        console.log(text)
        setTimeout(() => rs() ,time)
    })
} 

async function runText(){
   try {
       await showText('A',1000)
       await showText('B',1000)
       await showText('C',1000)
       await showText('D',1000)
       console.log('Done')
    } catch (e) {
        console.log(e)
    }
}
runText()

// showText('A',1000)
// .then( () => showText('B',1000))
// .then( () => showText('C',1000))
// .then( () => showText('D',1000))
