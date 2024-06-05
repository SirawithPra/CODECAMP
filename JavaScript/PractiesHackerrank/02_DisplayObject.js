function displayInformation(library) {
    library.forEach(e=>{
        (e.readingStatus)
            ?console.log(`Already read '${e.title}' by ${e.author}.`)
            :console.log(`You still need to read '${e.title}' by ${e.author}.`)
    })
} 

// tail starts here
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation(library);