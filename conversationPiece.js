// eventListener on send/arrow button. Triggered on click 
document.querySelector('.send-button').addEventListener('click',()=>{
    const entry = {
        text: document.querySelector('.final').value,
        id: 'user',
    }
    // adds obj with user input and id to currentConversation in conversation.js.
    addToCurrentConversation(entry)
    document.querySelector('ul').innerHTML =''
    // erases and populates ul element.
    printWholeConversation(currentConversation)
    document.querySelector('.final').value=''
    // this function auto scrolls the window vertically.
    // calls the bot to check on user input and triggers response.
    botConvo()
    scrollWin()
})

// eventListener on send/arrow button. Triggered on enter key
document.querySelector('.final').addEventListener('keydown',(event)=>{
    if (event.keyCode === 13) {
        const entry = {
            text: document.querySelector('.final').value,
            id: 'user',
        }
    
        addToCurrentConversation(entry)
        document.querySelector('ul').innerHTML =''
        printWholeConversation(currentConversation)
        document.querySelector('.final').value=''
        botConvo()
        scrollWin()
    }
});