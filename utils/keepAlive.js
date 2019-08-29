const http  = require( 'http' );

function keepAlive () {
    clearInterval();
    setInterval( () => {
        http.get( 'http://localhost:3000', resp => {
            //console.log( resp );
        } );
    }, 20 * 60 * 1000 );
}

module.exports = keepAlive;
