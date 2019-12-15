const speech = new webkitSpeechRecognition() || speechRecognition();

speech.continuous = false
speech.interimResults = true
speech.language = 'en-US'


document.querySelector('.microphone-button').addEventListener('click', ()=>{
    speech.start()
})

speech.onstart = ()=>{
    recognizing = true
}

speech.onresult = (event)=>{
    let interim_transcript = ''
    let final_transcript = ''

    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
        } else {
            interim_transcript += event.results[i][0].transcript;
        }
    }
    document.querySelector('.interim').value = interim_transcript;
    document.querySelector('.interim').style.color = 'orange'
    document.querySelector('.final').value = final_transcript[0].toUpperCase() + final_transcript.slice(1);
    document.querySelector('.final').style.color = 'black'
}

