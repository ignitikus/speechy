const botConvo = ()=>{
    let userText = currentConversation[currentConversation.length-1].text.toLowerCase()
    if(currentConversation[currentConversation.length-1].id === 'user'){
        if(userText.includes('hi') ||userText.includes('hello') ){
            const entry = {
                text: 'Greetings! What\'s your name?',
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay()
        }
    }
}
