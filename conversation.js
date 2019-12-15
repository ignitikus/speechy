const conversation = [
    {
        text: 'Hello, I\'m a Chat-bot',
        id: 'bot',
    },
    {
        text: 'Hello Chat-bot',
        id: 'user',
    },
    {
        text: 'Hello Chat-bot',
        id: 'user',
    },
    {
        text: 'Hello, I\'m a Chat-bot',
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