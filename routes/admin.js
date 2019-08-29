const express = require( 'express' );

const router = express.Router();

router.get( '/new-book', ( req, res, next ) => {
    res.render( 'admin/newBook' );
} );

router.post( '/new-book', ( req, res, next ) => {
    console.log( req.body );
    debugger;
    res.redirect( '/' );
} );

module.exports = router;