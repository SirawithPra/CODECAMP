function sortLibrary() {
    library.sort(compare)
    console.log(library)
}
// const compare = ( a, b ) => {
//     if ( a.title < b.title ){
//       return -1;
//     }
//     if ( a.title > b.title ){
//       return 1;
//     }
//     return 0;
//   }

const compare = (a, b) => a.title < b.title ? -1 : a.title > b.title ? 1 : 0;

// tail starts here
var library = [
    {
        author: 'Aill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Buzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();