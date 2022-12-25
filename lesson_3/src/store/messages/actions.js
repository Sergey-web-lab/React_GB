export const ADD_CHAT = 'ADD_CHAT'
export const DELETE_CHAT = 'DELETE_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
})

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    payload: chatName
})

export const addMessage = (chatName, text) => ({
    type: ADD_MESSAGE,
    payload: { chatName, text }
})

let timeout
export const addMessageWithReply = (chatName, message) => (dispatch) => {
    dispatch(addMessage(chatName, message))

    if (timeout) {
        clearTimeout(timeout)
    }

    if (message.author !== 'bot') {
        timeout = setTimeout(() => {
            dispatch(addMessage(chatName, {
                author: 'bot',
                text: 'Thank you for your message'
            }))
        }, 1000)
    }
}