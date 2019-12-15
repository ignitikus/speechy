const printConvo = (message)=>{
    const newDiv = document.createElement('div')
    const newPar = document.createElement('p')

    newDiv.classList.add('text-container')
    
    newPar.innerText = message.text;
    
    if(message.id === 'bot'){
        newDiv.classList.add('bot-text')
    } else if(message.id === 'user'){
        newDiv.classList.add('user-text')
    }

    document.querySelector('.conversation').appendChild(newDiv)
    document.querySelectorAll('.text-container')[document.querySelectorAll('.text-container').length-1].appendChild(newPar)
}

const printWholeConversation = (currentConvo)=>{
    for(const convo of currentConvo){
        printConvo(convo)
    }
}

printWholeConversation(currentConversation)