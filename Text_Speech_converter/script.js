let speech=new SpeechSynthesisUtterance();

// document.querySelector("button").addEventListener("click",()=>{
//     speech.text=document.querySelector("textarea").value;
//     window.speechSynthesis.speak(speech);
// });

let listen_voice=document.getElementById("listen-voice"); //button
let content=document.getElementById("content"); //textarea

let voices=[];
let voiceSelect=document.querySelector("select")

window.speechSynthesis.onvoiceschanged=()=>{
voices =window.speechSynthesis.getVoices();
speech.voice=voices[0];

voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};

voiceSelect.addEventListener("change" ,()=>{
speech.voice=voices[voiceSelect.value];
});

listen_voice.addEventListener("click",()=>{
    speech.text=content.value;
    window.speechSynthesis.speak(speech);

});

