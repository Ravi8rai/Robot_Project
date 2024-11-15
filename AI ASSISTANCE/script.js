const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

//console.log(recognition);

recognition.Lang = "eng-US"

const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    //recognition.start()

    // text to voice convert
    function speak(text) {
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")){
            speak("Opening Youtube...")
        window.open("https://www.youtube.com/","_blank")
    } else if (command.includes("open facebook")){
        speak("Opening facebook...")
    window.open("https://www.facebook.com/","_blank")

  } else if (command.includes("open instagram")){
    speak("Opening instagram...")
window.open("https://www.instagram.com/","_blank")

} else if (command.includes("open whatsapp")){
    speak("Opening whatsapp...")
window.open("https://www.whatsapp.com/","_blank")

} else if (command.includes("open google")){
    speak("Opening google...")
window.open("https://www.google.com/","_blank")


}
else {
    speak("search on google...")
    window.open(`https://www.googel.com/search?q=${command}`,"_blank")
}
}
speak("Hello what you want from me")
speak("I Feel That you tap me")

setTimeout(()=>{
    btn.innerHTML = "Listening..."
    btn.style.backgroundColor = "red"
    recognition.start()
}, 2000);

recognition.onresult= (event)=>{
    const command = event.results[0][0].transcript.toLowerCase();
    //console.log(command)    
    handleCommands(command);

};
    recognition.onend = () => {
          btn.innerHTML = "Tap Me So That I Can Listen You..."
    btn.style.backgroundColor = "blue"
    }
});


