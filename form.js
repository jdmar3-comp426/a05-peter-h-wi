window.addEventListener( "load", function () {
    function sendData() {
        console.log("start8")

        const sendRequest = new XMLHttpRequest();
        console.log("start9")

        const signupInfo = new FormData( form );
        console.log("start3")

        sendRequest.addEventListener( "error", function ( event ) {
            console.log("start1")
            alert( 'Submission unsuccessful! Please try again.' );
        });

        sendRequest.addEventListener( "load", function ( event ) {
            console.log("start2")
            alert( 'Your account was created!' );
        })
        console.log("start")
        console.log(signupInfo.get('email'));
        console.log(signupInfo.get('id'));
        console.log(signupInfo.get('pass'));
        console.log("signupInfo.get('email')");

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" );
        sendRequest.send( signupInfo );
    }
    const form = document.getElementById( "signup" );
    console.log("start4")


    form.addEventListener( "submit", function ( event ) {
        console.log("start5")

        event.preventDefault();
        console.log("start6")

        sendData();
        console.log("start7")

    });
} );