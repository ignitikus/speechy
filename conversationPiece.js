document.querySelector('.send-button').addEventListener('click',()=>{
    const entry = {
        text: document.querySelector('.final').value,
        id: 'user',
    }

    addToCurrentConversation(entry)
    document.querySelector('ul').innerHTML =''
    printWholeConversation(currentConversation)
    document.querySelector('.final').value=''
    scrollWin()
})

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
        scrollWin()
    }
});