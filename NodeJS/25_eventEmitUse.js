const Em1 = require('./24_eventEmitBuild')  //Class
const em1 = new Em1() //Instance

em1.emit1();
em1.on('oneSec',(e)=>{
    console.log(`Event ${e.text} : ${e.id}`)
})