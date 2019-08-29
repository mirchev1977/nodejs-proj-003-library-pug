const fs      = require( 'fs'      );

function fetchAllBooks ( src ) {
    const promise = new Promise( ( resolve, reject ) => {
        getAllBooks( src ).then( booksArr => {
            const [ id, title, author, issuedon ] = booksArr.shift().split( ';' );
            const arrBooks = booksArr.map( bookLine => {
                const [ bdyId, bdyTitle, bdyAuthor, bdyIssuedOn ] = bookLine.split( ';' );
                const book = {};
                book[ id       ] = bdyId;
                book[ title    ] = bdyTitle;
                book[ author   ] = bdyAuthor;
                book[ issuedon ] = bdyIssuedOn;

                if ( bdyId && bdyTitle && bdyAuthor && bdyIssuedOn ) {
                    return book; 
                }
            } );

            const arrBooksFiltered = arrBooks.filter( book => {
                if ( book ) return book;
            } );

            resolve( { books: arrBooksFiltered, bookHeaders: {
                id, title, author, issuedon 
            } } );
        }, err => {
            debugger;
        } );
    } );

    return promise;
}

function getAllBooks ( path ) {
    const promise = new Promise( ( resolve, reject ) => {
        let booksStr = '';
        fs.readFile( path, ( err, data ) => {
            if ( err ) {
                reject( err );
                return;
            }
            booksStr += data;
            resolve( booksStr.split( /\n/ ) );
        } ); 
    } );
    return promise;
}

function newBook ( book ) {
    let lastIdStr = '';
    fs.readFile( './data/lastId.txt', ( err, data ) => {
        if ( err ) {
            console.log( err );
        }
        lastIdStr += data;
        let lastId = ( lastIdStr * 1 ) + 1;
        const arrBook = [ 
            lastId, 
            book[ 'book-title'    ],
            book[ 'book-author'   ],
            book[ 'book-issuedon' ]
        ];

        let bookLine = arrBook.join( ';' ) + "\n";

        fs.appendFile( './data/books.txt', bookLine, ( err ) => {
            if ( err ) {
                console.log( err );
            }

            fs.writeFile( './data/lastId.txt', lastId, ( err ) => {
                if ( err ) {
                    console.log( err );
                }
            } );
        } );
    } );
}

module.exports = {
    fetchAllBooks: fetchAllBooks,
    newBook:       newBook
};