const speech = new webkitSpeechRecognition() || speechRecognition();

speech.continuous = false
speech.interimResults = true
speech.language = 'en-US'


document.querySelector('.send-button').addEventListener('click', ()=>{
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
    document.querySelector('.final').innerHTML = final_transcript;
    document.querySelector('.interim').innerHTML = interim_transcript;
    console.log(document.querySelector('.final').innerHTML)
    console.log(document.querySelector('.interim').innerHTML)
}

