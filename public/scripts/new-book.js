const submitButton = document.getElementById( 'new-book' );

submitButton.addEventListener( 'submit', ( ev ) => {
    const newBookTitle    = document.getElementById( 'new-book__book-title'    ).value;
    const newBookAuthor   = document.getElementById( 'new-book__book-author'   ).value;
    const newBookIssuedOn = document.getElementById( 'new-book__book-issuedon' ).value;
    const errorMessage    = document.getElementById( 'error-message'           );

    errorMessage.style.display = "block";

    if ( !newBookTitle || !newBookAuthor || !newBookIssuedOn ) {
        ev.preventDefault();
        errorMessage.innerText = 'All form fields have to be filled!';
        return false;
    }

    const dd   = "(?:0[1-9]|[12][0-9]|3[012])";
    const mm   = "(?:0[1-9]|1[012])";
    const yyyy = "(?:[12]\\d\\d\\d)";

    const date = `${dd}\\.${mm}\\.${yyyy}`;

    if ( !newBookIssuedOn.match( date ) ) {
        ev.preventDefault();
        errorMessage.innerText = 'Invalid date!';
        return false;
    }
    const [ bookDD, bookMM, bookYYYY ] = newBookIssuedOn.split( /\s*\.\s*/ );

    const dtNow  = new Date(                                   ).getTime();
    const dtBook = new Date( `${bookYYYY}-${bookMM}-${bookDD}` ).getTime();
    if ( dtBook > dtNow ) {
        ev.preventDefault();
        errorMessage.innerText = 'Book Issue Date Cannot Be Bigger than Now!';
        return false; 
    }
} );