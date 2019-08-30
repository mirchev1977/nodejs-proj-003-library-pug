const express = require( 'express' );

const library = require( '../utils/library' );

const router = express.Router();

router.get( '', ( req, res, next )  => {
    library.fetchAllBooks ( './data/books.txt', req.query ).then( data => {
        res.render( 'library/allBooks', { 
            books:       data[ 'books'       ], 
            bookHeaders: data[ 'bookHeaders' ] 
        } ); 
    }, err => {
        console.log( err );
    } );
} ); 

module.exports = router;