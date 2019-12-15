const botConvo = ()=>{
    let userText = currentConversation[currentConversation.length-1].text.toLowerCase()
    if(currentConversation[currentConversation.length-1].id === 'user'){
        if(userText.includes('hi') || userText.includes('hello') ){
            const entry = {
                text: 'Greetings! What\'s your name?',
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
        }
        if(userText.includes('name') && userText.includes('is')){
            const entry = {
                text: `Welcome to my world ${userName}`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
        }
        if(userText.includes('a') || userText.includes('joke')){
            const entry = {
                text: `Why did the programmer quit his job?`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(2000)
            const joke = (num) =>{
                setTimeout(function(){ 
                    const entry = {
                        text: `Because he didn't get arrays.`,
                        id: 'bot',
                    }
                    addToCurrentConversation(entry)
                    document.querySelector('ul').innerHTML =''
                    printWholeConversation(currentConversation); }, num);
            }
            joke(5000)
        }
    }
}
