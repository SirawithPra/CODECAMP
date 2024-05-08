const   EventEmitter = require('events')
class Em1 extends EventEmitter {
    emit1(){
        setInterval( ()=>this.emit('oneSec',{id:1, text:'One Second'}),1000)
    }
    emit2(){
        setInterval( ()=>this.emit('twoSec'),2000)
    }
};
 module.exports = Em1;