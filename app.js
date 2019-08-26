const express = require( 'express' );

const app = express();

app.get( '/', ( req, res, next ) => {
    res.write( '<h1>Hello world</h1>' );
    res.end();
} );

app.listen( process.mainModule.PORT || 3000 );