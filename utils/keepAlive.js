const http  = require( 'https' );

function keepAlive () {
    clearInterval();
    setInterval( () => {
        http.get( 'https://nodejs-proj-003-library-pug.herokuapp.com', resp => {
            //console.log( resp );
        } );
    }, 20 * 60 * 1000 );
}

module.exports = keepAlive;
