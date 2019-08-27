const path    = require( 'path'    );
const express = require( 'express' );

const libraryRoutes = require( './routes/library' );
const adminRoutes   = require( './routes/admin'   );

const app = express();

const rootDir = path.dirname( process.mainModule.filename );
app.use( express.static( path.join( rootDir, 'public' ) ) );

app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );


app.use( '/', libraryRoutes    );
app.use( '/admin', adminRoutes );

app.use( ( req, res, next ) => {
    res.render( '404' );
} );

app.listen( process.env.PORT || 3000 );