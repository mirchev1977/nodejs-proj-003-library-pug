const express = require( 'express' );

const libraryRoutes = require( './routes/library' );

const app = express();

app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );

app.use( '/', libraryRoutes );
app.use( ( req, res, next ) => {
    res.render( '404' );
} );

app.listen( process.env.PORT || 3000 );