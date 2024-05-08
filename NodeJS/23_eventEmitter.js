const   EventEmitter = require('events')
const em1 =new EventEmitter()
const em2 =new EventEmitter()

setInterval( ()=>em1.emit('oneSec',{id:1, text:'One Second'}),1000)
setInterval( ()=>em1.emit('twoSec'),2000)

em1.on('oneSec',(e)=>{
    console.log(`Event ${e.text} : ${e.id}`)
    console.log('-----------------------')
})
em1.on('twoSec',()=>
    console.log('Event two sec'))