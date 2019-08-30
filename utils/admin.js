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

function editBook ( book ) {
    let fileStr = '';
    fs.readFile( './data/books.txt', ( err, data ) => {
        if ( err ) {
            console.log( err );
        }

        fileStr += data;

        const arrFile = fileStr.split( /\n/ );

        arrFile.forEach( ( line, i ) => {
            if ( line.match( new RegExp( '^' + book[ 'book-id' ] + '\\;' ) ) ) {
                const newLine = `${book[ 'book-id' ]};${book[ 'book-title' ]};${book[ 'book-author' ]};${book[ 'book-issuedon' ]}`;
                arrFile[ i ] = newLine;
            }
        } );

        const writeStr = arrFile.join( "\n" );

        fs.writeFile( './data/books.txt', writeStr, err => {
            if ( err ) {
                console.log( err );
            }
        } );
    } );
}

module.exports = {
    deleteBook: deleteBook,
    editBook:   editBook
};