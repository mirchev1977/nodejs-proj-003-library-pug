const fs      = require( 'fs'   );
const path    = require( 'path' );
const rootDir = path.dirname( process.mainModule.filename );

function rewriteFile ( source, dest ) {
  const fullPathSource = path.join( rootDir, 'data', source );
  const fullPathDest   = path.join( rootDir, 'data', dest );

  const interval = 15 * 60 * 1000;

  clearInterval();
  setInterval( function () {
    fs.readFile( fullPathSource, 'utf-8', ( err, data ) => {
        if ( err ) {
            console.log( err );
        }

        fs.writeFile( fullPathDest, data, ( err ) => {
          if ( err ) {
            console.log( 'error: ', err );
          }

          //console.log( 'written', dest );
        } );
    } ); 
  }, interval ); 
}

module.exports = {
  rewriteFile 
};
