const path        = require( 'path'                  );
const express     = require( 'express'               );
const bodyParser  = require( 'body-parser'           );
const rootDir     = require( './utils/rootdir'       );
const fileRewrite = require( './utils/fileRewrite'   );
const keepAlive   = require( './utils/keepAlive'     );

const libraryRoutes = require( './routes/library' );
const adminRoutes   = require( './routes/admin'   );

fileRewrite.rewriteFile ( 'books_template.txt', 'books.txt' );
keepAlive();

const app = express();

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( express.static( path.join( rootDir, 'public' ) ) );

app.set( 'view engine', 'pug' );
app.set( 'views', 'views' );


app.use( '/',      libraryRoutes );
app.use( '/admin', adminRoutes   );

app.use( ( req, res, next ) => {
    res.render( '404' );
} );

app.listen( process.env.PORT || 3000 );