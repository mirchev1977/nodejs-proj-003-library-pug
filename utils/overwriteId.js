const fs = require( 'fs' );

function overwriteId ( id ) {
    fs.writeFile( './data/lastId.txt', id, ( err ) => {
        if ( err ) {
            console.log( err );
        }
    } );
}

module.exports = overwriteId;