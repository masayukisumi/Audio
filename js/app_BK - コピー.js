// app.js

var text;
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
    text = e.results[0][0].transcript;
 //       var text = e.results[0][0].transcript;
    //Display div
    content.textContent = text;




} );

  function handleDownload() {
  alert(text);
                var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
                var content = '‚ ‚ ‚ ,aaa,11111';
                var blob = new Blob([ bom, text ], { "type" : "text/csv" });

                if (window.navigator.msSaveBlob) { 
                    window.navigator.msSaveBlob(blob, "test.csv"); 

                    window.navigator.msSaveOrOpenBlob(blob, "test.csv"); 
                } else {
                    document.getElementById("download").href = window.URL.createObjectURL(blob);
                }
            }

