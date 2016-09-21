// app.js


var speech = new webkitSpeechRecognition();

var btn = document.getElementById('btn');
var content = document.getElementById('content');

//speec api
var speech = new webkitSpeechRecognition();

//language as JPN
speech.lang = "ja";
btn.addEventListener( 'click' , function() {

    //function for clicking the button
    
    // start voice Recog
    speech.start();
} );

speech.addEventListener( 'result' , function( e ) {
    // Func result
        //resultDispConsl
    console.log( e );
        var text = e.results[0][0].transcript;
    //Display div
    content.textContent = text;
} );