import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addChat, deleteChat, addMessage } from "../store/messages/actions"
import { selectChat } from "../store/messages/selectors"
import { Form } from "../components/Form.lv"
import { MessageList } from "../components/MessageList"
import { selectMessage } from "../store/messages/selectors"

export function ChatList() {
    // const [messages, setMessages] = useState([])
    const { chatId } = useParams()
    const messages = useSelector(selectMessage)
    // const addMessage = (newMessage) => {
    //     setMessages([...messages, newMessage])
    // }

    useEffect(() => {
        // if (messages.length > 0 && messages[messages.length - 1].author === 'user') {
        if (chatId &&
            messages[chatId]?.length > 0 &&
            messages[chatId][messages[chatId].length - 1].author === 'user') {
            const timeout = setTimeout(() => {
                addMessage(chatId, {
                    author: 'bot',
                    text: 'Thank you for your message'
                })
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const chats = useSelector(selectChat)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))
    }

    return (
        <>
            <h1>Welcome to chat</h1>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
                    </li>
                ))}
            </ul>
            <h1>ChatList</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button>Create Chat</button>
            </form>
            <Form></Form>
            <MessageList messages={messages}></MessageList>
        </>
    )
}