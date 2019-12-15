const conversation = [
    {
        text: 'Hello, I\'m a Chat-bot. Go ahead and ask me some questions',
        id: 'bot',
    },
]

let currentConversation = [...conversation]

const addToCurrentConversation = (entry)=>{
    currentConversation.push(entry)
}

const scrollWin= () =>{
    window.scrollBy(0, 100);
}

const delay = (num) =>{
    setTimeout(function(){ 
        document.querySelector('ul').innerHTML =''
        printWholeConversation(currentConversation); }, num);
}

let userName = ''