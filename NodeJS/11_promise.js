console.log('1');
new Promise(rs =>
    setTimeout(() => {
        console.log('2');
        rs();
    }, 1000)).then(() => {
        new Promise(rs =>
            setTimeout(() => {
                console.log('3');
                rs();
            }, 1000)).then(() => {
            setTimeout(()=>console.log('4'),1000);
        })
    });

