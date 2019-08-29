const express = require( 'express' );

const router = express.Router();

router.get( '/new-book', ( req, res, next ) => {
    res.render( 'admin/newBook' );
} );

router.post( '/new-book', ( req, res, next ) => {
    res.redirect( '/' );
} );

module.exports = router;