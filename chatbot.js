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
                text: `${userName}! What a beautiful name!`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
        }
        if(userText.includes('a') && userText.includes('joke')){
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

        if(userText.includes('what') && userText.includes('time')){
            const entry = {
                text: `It's ${new Date().getHours()}:${new Date().getMinutes()}`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
        }

        if(userText.includes('let\'s') && userText.includes('math')){
            const entry = {
                text: `Yay! That's my specialty. I can add, substract, multiply, divide, and do the power thingy.`,
                id: 'bot',
            }
            addToCurrentConversation(entry)
            delay(1500)
        }

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
        }
    }
}
