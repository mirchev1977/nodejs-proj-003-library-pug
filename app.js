const express = require( 'express' );

const libraryRoutes = require( './routes/library' );

const app = express();

app.use( '/', libraryRoutes );

app.listen( process.mainModule.PORT || 3000 );