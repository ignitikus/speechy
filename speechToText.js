// web speech API supported only in specific browsers.
// should work natively in chrome.
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
    if(final_transcript.includes('my') && final_transcript.includes('name')){
        userName = final_transcript.split(' ').slice(-1)
    }
    
    // interim result will be displayed before final transcript is ready.
    document.querySelector('.interim').value = interim_transcript;
    
    // custom styles for interim result
    document.querySelector('.interim').style.color = 'orange'
    document.querySelector('.interim').style.fontStyle = 'italic'
    
    // final transcript overwrites interim result
    document.querySelector('.final').value = final_transcript[0].toUpperCase() + final_transcript.slice(1);
    document.querySelector('.final').style.color = 'black'
    document.querySelector('.final').style.fontStyle = 'normal'
}

