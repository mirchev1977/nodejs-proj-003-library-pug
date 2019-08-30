const express = require( 'express' );

const utilAdmin = require( '../utils/admin' );

const library = require( '../utils/library' );

const router = express.Router();

router.get( '/new-book', ( req, res, next ) => {
    res.render( 'admin/newBook' );
} );

router.post( '/new-book', ( req, res, next ) => {
    library.newBook( req.body );
    res.redirect( '/' );
} );

router.get( '/delete', ( req, res, next ) => {
    utilAdmin.deleteBook( req.query[ 'id' ] );
    res.redirect( '/' );
} );

router.get( '/edit', ( req, res, next ) => {
    res.render( 'admin/editBook', { book: req.query } );
} );

router.post( '/edit', ( req, res, next ) => {
    utilAdmin.editBook( req.body );
    res.redirect( '/' );
} );

module.exports = router;