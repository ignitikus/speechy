const conversation = [
    {
        text: 'Hello, I\'m a Chat-bot. But you can call me Chabt. Go ahead and ask me some questions.',
        id: 'bot',
    },
]

// preserves the original by assigning its values to a new variable
let currentConversation = [...conversation]

const addToCurrentConversation = (entry)=>{
    currentConversation.push(entry)
}

// auto scrolls page if there is a lot of entries.
const scrollWin= () =>{
    window.scrollBy(0, 100);
}

// custom delay function. provides illusion of a thinking bot. can assign any wait time in milliseconds.
const delay = (num) =>{
    setTimeout(function(){ 
        document.querySelector('ul').innerHTML =''
        printWholeConversation(currentConversation); }, num);
}

let userName = ''