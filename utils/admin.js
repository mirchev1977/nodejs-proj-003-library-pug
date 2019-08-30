const fs = require( 'fs' );

function deleteBook ( delBookId ) {
    if ( !delBookId ) return; 

    let fileStr = '';
    fs.readFile( './data/books.txt', ( err, data ) => {
        if ( err ) {
            console.log( err );
        }

        fileStr += data;

        const arrFile = fileStr.split( /\n/ );

        const arrFiltered = arrFile.filter( line => {
            return !line.match( new RegExp( `^${delBookId}\;` ) );
        } );

        const writeStr = arrFiltered.join( "\n" );

        fs.writeFile( './data/books.txt', writeStr, err => {
            if ( err ) {
                console.log( err );
            }
        } );
    } );
}

module.exports = {
    deleteBook: deleteBook
};