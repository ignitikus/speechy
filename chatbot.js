// botConvo() is called everytime user provides input.
const botConvo = ()=>{
    let userText = currentConversation[currentConversation.length-1].text.toLowerCase()
    if(currentConversation[currentConversation.length-1].id === 'user'){
        // Checks if previous user phrase contained certain keywords.
        // Responds to standard greeting
        if(userText.includes('hi') || userText.includes('hello') ){
            const entry = {
                text: 'Greetings! What\'s your name?',
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }

        // entry.text grabs the name that stored in variable in conversation.js
        if(userText.includes('name') && userText.includes('is')){
            const entry = {
                text: `${userName}! What a beautiful name!`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }

        // Cracks a joke. Having difficulties programming another joke.
        if(userText.includes('a') && userText.includes('joke')){
            const entry = {
                text: `Why did the programmer quit his job?`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(2000)
            scrollWin()
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
            scrollWin()
        }

        // Tells current time
        if(userText.includes('what') && userText.includes('time')){
            const entry = {
                text: `It's ${new Date().getHours()}:${new Date().getMinutes()}`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }

        // Just a reminder of what kind of math this bot capable doing.
        if(userText.includes('let\'s') && userText.includes('math')){
            const entry = {
                text: `Yay! That's my specialty. I can add, substract, multiply, divide, and do the power thingy.`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }

        // There was no necessity to separate math function since it's used just here.
        if(userText.includes('+') || userText.includes('-') || userText.includes('*') || userText.includes('/')|| userText.includes('^')){
            const firstNum = Number(currentConversation[currentConversation.length-1].text.split(' ')[0])
            const secondNum = Number(currentConversation[currentConversation.length-1].text.split(' ')[2])
            const sign = currentConversation[currentConversation.length-1].text.split(' ')[1]
            let result = 0
            const calculation = (num1, num2)=>{
                if(sign === '+'){
                    result = num1 + num2
                } else if(sign === '-'){
                    result = num1 - num2
                } else if (sign === '*'){
                    result = num1 * num2
                } else if (sign === '/'){
                    result = num1 / num2
                } else if (sign === '^'){
                    result = num1 ** num2
                }
            }
            calculation(firstNum, secondNum)
            
            const entry = {
                text: result,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }

        // Goodbye text.
        if(userText.includes('good') && userText.includes('bye')){
            const entry = {
                text: `It was nice talking to you, ${userName}. Come again! I stored your name in my memory.`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
            scrollWin()
        }
    }
}
