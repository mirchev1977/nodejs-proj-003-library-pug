Array.from( document.getElementsByClassName( 'delete-book' ) ).forEach(book => {
    book.addEventListener( 'click', ( ev ) => {
        const getPrompt = prompt( 'Delete the current book? Are you sure? Y/[N]' );

        if ( !getPrompt.match( /[yY][eE]?[sS]?/ ) ) {
            ev.preventDefault();
            return false;
        }
    } );
});