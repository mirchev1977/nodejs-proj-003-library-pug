const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res, next )  => {
    res.write( '<h1>Hello world!</h1>' );
    res.end();
} );

module.exports = router;