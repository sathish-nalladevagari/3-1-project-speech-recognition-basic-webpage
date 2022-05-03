const mic = document.querySelector('.mic');
mic.addEventListener('click', function (e) {
    console.log('mic is clicked')
})
const pad = document.querySelector('.pad');
pad.addEventListener('click', function (e) {
    window.open("/speech/speech.html","_self")
})
const music = document.querySelector('.music');
music.addEventListener('click', function (e) {
    window.open("/music/music.html","_self")
})
const book = document.querySelector('.book');
book.addEventListener('click', function (e) {
    window.open("/commands/commands.html","_self")
})
const msg = document.querySelector('.msg');
msg.addEventListener('click', function (e) {
    window.open("/mail/mail.html")
})

if (annyang) {
    
    var commands = {
        'open music': function () {
            window.open("/music/music.html","_self")
            
        },
        'open pad': function () {
            window.open("/speech/speech.html","_self")
            
        },
        'open commands': function () {
            window.open("/commands/commands.html","_self")
            
        },
        'open mail': function () {
            window.open("/mail/mail.html","_self")            
        },
        '*tag': function (variable5) {
            let transcript = document.getElementById("transcript")
            transcript.value = variable5
        },
        



    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}
