setTimeout(() => {
    console.log('A')
    console.log('-----------------------');
}, 1000);
setTimeout(() => console.log('B'), 500);
setTimeout(() => console.log('C'), 200);

setTimeout(() => {
    console.log('a')
    setTimeout(() => {
        console.log('b')
        setTimeout(() => {
            console.log('c')
            setTimeout(() => {
                console.log('d')
                setTimeout(() => {
                    console.log('e')
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)